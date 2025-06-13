'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export function ContactMeModal() {
  const id = React.useId();
  const [form, setForm] = useState({
    name: '',
    email: 'gurnishsinghji@gmail.com',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_efezud4', // Replace with your service ID
        'template_swea232', // Replace with your template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        'oXVaO_e9cOYUuP1uJ'
      );
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
      closeRef.current?.click();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Contact Me</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
        </DialogHeader>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor={`name-${id}`}>Name</Label>
            <Input
              className="mt-4"
              id={`name-${id}`}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <Label htmlFor={`message-${id}`}>Message</Label>
            <Textarea
              id={`message-${id}`}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="min-h-28 mt-4"
              required
            />
          </div>
          <DialogFooter className="pt-4 gap-2">
            <DialogClose asChild>
              <Button ref={closeRef} type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
