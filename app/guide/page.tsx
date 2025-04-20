"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, FileText, Code, ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import Link from "next/link"

const mockGuides = {
  "getting-started": `
# Getting Started with HackMouse

Welcome to HackMouse! This guide will help you get started with our program.

## Requirements

- Experience with CAD software
- Basic understanding of ergonomics
- Passion for innovation

## First Steps

1. Review our design guidelines
2. Start working on your prototype
  `,
  "design-guidelines": `
# Design Guidelines

Follow these guidelines to ensure your mouse design meets our requirements.

## Technical Specifications

- Dimensions: Maximum 130mm x 70mm x 40mm
- Weight: Under 120g
- Buttons: Minimum 2, Maximum 12
- Sensor: Minimum 16,000 DPI

## Materials

We recommend using ABS plastic for the main body and PBT for the buttons.
  `,
  "submission-process": `
# Submission Process

Learn how to submit your design for consideration.

## Required Files

- 3D model in .STL format
- Technical specifications document
- Renders of your design (minimum 4 angles)
- Bill of materials

## Review Timeline

Our team reviews submissions monthly. You can expect to hear back within 30 days.
  `,
}

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState("getting-started")
  const [markdownContent, setMarkdownContent] = useState("")

  useEffect(() => {
    setMarkdownContent(mockGuides[activeTab as keyof typeof mockGuides])
  }, [activeTab])

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="container">
        <Link href="/" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            HackMouse <span className="text-cyan-400">Guide</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about designing and submitting your mouse.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="getting-started" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-900">
              <TabsTrigger
                value="getting-started"
                className="data-[state=active]:bg-cyan-900 data-[state=active]:text-white"
              >
                <Book className="h-4 w-4 mr-2" />
                Getting Started
              </TabsTrigger>
              <TabsTrigger
                value="design-guidelines"
                className="data-[state=active]:bg-cyan-900 data-[state=active]:text-white"
              >
                <FileText className="h-4 w-4 mr-2" />
                Design Guidelines
              </TabsTrigger>
              <TabsTrigger
                value="submission-process"
                className="data-[state=active]:bg-cyan-900 data-[state=active]:text-white"
              >
                <Code className="h-4 w-4 mr-2" />
                Submission Process
              </TabsTrigger>
            </TabsList>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <article className="prose prose-invert prose-cyan max-w-none">
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
              </article>
            </div>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
