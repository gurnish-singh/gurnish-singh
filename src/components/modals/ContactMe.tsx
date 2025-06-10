"use client"

import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactMeModal() {
    const id = React.useId()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Contact Me</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                            <DialogTitle>Contact Me</DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4 mt-4">
                            <div>
                                <Label htmlFor={`name-${id}`}>Name</Label>
                                <Input className="mt-4" id={`name-${id}`} placeholder="Your name" />
                            </div>
                            <div>
                                <Label htmlFor={`email-${id}`}>Email</Label>
                                <Input className="mt-4" id={`email-${id}`} type="email" placeholder="you@example.com" />
                            </div>
                            <div>
                                <Label htmlFor={`message-${id}`}>Message</Label>
                                <Textarea
                                    id={`message-${id}`}
                                    placeholder="What would you like to say?"
                                    className="min-h-28 mt-4"
                                />
                            </div>
                            <DialogFooter className="pt-4 gap-2">
                                <Button type="button" variant="ghost">Cancel</Button>
                                <Button type="submit">Send</Button>
                            </DialogFooter>
                        </form>
            </DialogContent>
        </Dialog>
    )
}