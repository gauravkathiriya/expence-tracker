"use client"

import { useState, useEffect } from "react"
import { User, Upload, Loader2, UserCircle, Mail, Edit } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { supabase } from "@/lib/supabase"
import { UserProfile } from "@/lib/types"
import { PageHeader } from "@/components/layout/page-header"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }).optional(),
  bio: z.string().max(500, {
    message: "Bio must be 500 characters or less.",
  }).optional(),
})

export default function ProfilePage() {
  const [loading, setLoading] = useState(true)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      bio: "",
    },
  })

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true)
        const { data: { user } } = await supabase.auth.getUser()
        
        if (!user) {
          router.push("/login")
          return
        }

        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        
        if (error) {
          throw error
        }

        if (data) {
          setUserProfile(data as UserProfile)
          form.setValue("fullName", data.full_name || "")
          form.setValue("email", data.email || "")
          form.setValue("bio", data.bio || "")
        }
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error loading profile",
          description: error.message,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [router, form])

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0]
      if (!file || !userProfile) return

      if (file.size > 5 * 1024 * 1024) {
        toast({
          variant: "destructive",
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
        })
        return
      }

      if (!file.type.startsWith("image/")) {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload an image file",
        })
        return
      }

      setIsUploading(true)
      setUploadProgress(0)

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 95) {
            clearInterval(progressInterval)
            return prev
          }
          return prev + 5
        })
      }, 100)

      const fileExt = file.name.split('.').pop()
      const fileName = `${userProfile.id}-${Date.now()}.${fileExt}`
      const filePath = `avatars/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('profile-images')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { data: urlData } = supabase.storage
        .from('profile-images')
        .getPublicUrl(filePath)

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: urlData.publicUrl })
        .eq('id', userProfile.id)

      if (updateError) {
        throw updateError
      }

      // Simulate upload completion
      setUploadProgress(100)
      setTimeout(() => {
        clearInterval(progressInterval)
        setIsUploading(false)
        setUploadProgress(0)
        
        // Update the profile state with new avatar
        setUserProfile({
          ...userProfile,
          avatar_url: urlData.publicUrl
        })

        toast({
          title: "Profile updated",
          description: "Your profile image has been updated successfully",
        })
      }, 500)

      router.refresh()
    } catch (error: any) {
      setIsUploading(false)
      setUploadProgress(0)
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: error.message,
      })
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (!userProfile) return

      setLoading(true)
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: values.fullName,
          bio: values.bio,
        })
        .eq('id', userProfile.id)

      if (error) {
        throw error
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
      })

      // Update the local profile state
      setUserProfile({
        ...userProfile,
        full_name: values.fullName,
        bio: values.bio || "",
      })

      router.refresh()
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Update failed",
        description: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-8 space-y-6">
      <PageHeader
        title="Profile"
        description="Manage your account settings and profile"
        icon={User}
      />

      <div className="grid gap-6 md:grid-cols-5">
        <Card className="md:col-span-2 border-none shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 pb-8 text-white">
            <CardTitle>Profile Picture</CardTitle>
            <CardDescription className="text-purple-100">
              Upload and manage your profile image
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="mb-6 relative">
              <div className="h-32 w-32 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden transform -translate-y-12">
                {userProfile?.avatar_url ? (
                  <Image
                    src={userProfile.avatar_url}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-purple-100 dark:bg-gray-700">
                    <UserCircle className="h-16 w-16 text-purple-500 dark:text-gray-400" />
                  </div>
                )}
                <div className="absolute bottom-0 right-0">
                  <Label
                    htmlFor="avatar-upload"
                    className="h-8 w-8 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center cursor-pointer shadow-md"
                  >
                    <Edit className="h-4 w-4 text-white" />
                  </Label>
                  <Input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={isUploading}
                  />
                </div>
              </div>
            </div>

            {isUploading && (
              <div className="w-full space-y-2 mt-2">
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-600 transition-all duration-200"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-sm text-center text-muted-foreground">Uploading... {uploadProgress}%</p>
              </div>
            )}

            <p className="text-center text-sm text-muted-foreground mt-6">
              Upload a profile picture. JPG, PNG formats, max 5MB.
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 border-none shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardTitle>Personal Information</CardTitle>
            <CardDescription className="text-blue-100">
              Update your personal details
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {loading ? (
              <div className="flex items-center justify-center h-40">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="Your name" 
                              className="pl-10 h-12"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="your.email@example.com" 
                              className="pl-10 h-12"
                              disabled
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <p className="text-xs text-muted-foreground mt-1">
                          Email cannot be changed
                        </p>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us a little about yourself" 
                            className="min-h-[120px] resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </div>
                    ) : "Save Changes"}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 