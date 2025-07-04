"use client"

import { useState } from 'react'
import { Download, FileText, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { toast } from '@/components/ui/use-toast'
import { Transaction } from '@/lib/types'
import { formatDate } from '@/lib/utils'
import { stringify } from 'csv-stringify/sync'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface ExportDataProps {
  data: Transaction[]
  filename?: string
}

export function ExportData({ data, filename = 'transactions' }: ExportDataProps) {
  const [isExporting, setIsExporting] = useState(false)

  const exportAsCSV = async () => {
    try {
      setIsExporting(true)

      // Prepare data for CSV
      const records = data.map(item => ({
        Date: formatDate(item.date),
        Description: item.description || '-',
        Type: item.type.charAt(0).toUpperCase() + item.type.slice(1),
        Category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
        Amount: item.category === 'income' ? item.amount : -item.amount
      }))

      // Generate CSV string
      const csvString = stringify(records, {
        header: true,
        columns: ['Date', 'Description', 'Type', 'Category', 'Amount']
      })

      // Create a blob with the data
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' })

      // Create a download link
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)

      // Set link properties
      link.setAttribute('href', url)
      link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`)
      link.style.visibility = 'hidden'

      // Append to document, click and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: 'CSV Export Successful',
        description: 'Your data has been downloaded as a CSV file.'
      })
    } catch (error) {
      console.error('Export CSV error:', error)
      toast({
        variant: 'destructive',
        title: 'Export Failed',
        description: 'There was an error exporting your data.'
      })
    } finally {
      setIsExporting(false)
    }
  }

  const exportAsPDF = async () => {
    try {
      setIsExporting(true)

      // Create a new PDF document
      const doc = new jsPDF()

      // Add title
      const title = `${filename.charAt(0).toUpperCase() + filename.slice(1)} Report`
      doc.setFontSize(16)
      doc.text(title, 14, 22)

      // Add date
      doc.setFontSize(10)
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30)

      // Prepare data for table
      const tableData = data.map(item => [
        formatDate(item.date),
        item.description || '-',
        item.type.charAt(0).toUpperCase() + item.type.slice(1),
        item.category.charAt(0).toUpperCase() + item.category.slice(1),
        item.category === 'income'
          ? `$${item.amount.toFixed(2)}`
          : `-$${Math.abs(item.amount).toFixed(2)}`
      ])

      // Create table
      autoTable(doc, {
        head: [['Date', 'Description', 'Type', 'Category', 'Amount']],
        body: tableData,
        startY: 35,
        theme: 'striped',
        headStyles: {
          fillColor: [66, 66, 66],
          textColor: 255
        },
        alternateRowStyles: {
          fillColor: [240, 240, 240]
        }
      })

      // Add summary if there are transactions
      if (data.length > 0) {
        const totalIncome = data
          .filter(t => t.category === 'income')
          .reduce((sum, item) => sum + Number(item.amount), 0)

        const totalExpense = data
          .filter(t => t.category === 'expense')
          .reduce((sum, item) => sum + Number(item.amount), 0)

        const balance = totalIncome - totalExpense

        // Access final Y position
        const finalY = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 10

        doc.setFontSize(12)
        doc.text('Summary', 14, finalY)
        doc.setFontSize(10)
        doc.text(`Total Income: $${totalIncome.toFixed(2)}`, 14, finalY + 7)
        doc.text(`Total Expense: $${totalExpense.toFixed(2)}`, 14, finalY + 14)
        doc.text(`Balance: $${balance.toFixed(2)}`, 14, finalY + 21)
      }

      // Save the PDF
      doc.save(`${filename}_${new Date().toISOString().split('T')[0]}.pdf`)

      toast({
        title: 'PDF Export Successful',
        description: 'Your data has been downloaded as a PDF file.'
      })
    } catch (error) {
      console.error('Export PDF error:', error)
      toast({
        variant: 'destructive',
        title: 'Export Failed',
        description: 'There was an error exporting your data to PDF.'
      })
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={isExporting || data.length === 0}>
          {isExporting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Export
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={exportAsCSV} disabled={isExporting || data.length === 0}>
          <FileText className="mr-2 h-4 w-4" />
          <span>Export as CSV</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsPDF} disabled={isExporting || data.length === 0}>
          <FileText className="mr-2 h-4 w-4" />
          <span>Export as PDF</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 