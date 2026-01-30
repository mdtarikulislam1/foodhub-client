"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Mails,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-muted/40">
      <div className="max-w-[1800px] mx-auto px-4 py-12">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div className="space-y-4 max-w-[350px]">
            <CardContent>
              <h2 className="global_heading">FoodHub</h2>

              <p className="text-sm text-muted-foreground">
                FoodHub delivers fresh, natural and healthy foods directly to
                your door. Fast delivery, best price deals, and trusted quality
                — all in one place.
              </p>
            </CardContent>
          </div>

          <div className="space-y-4">
            <CardContent>
              <h3 className="global_heading">Navigation</h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/offers">Offers</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </CardContent>
          </div>

          <div className="space-y-4">
            <CardContent className="space-y-2 text-sm">
              <p className="global_heading">Developed by</p>
              <p>Md. Torikul Islam</p>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone />
                <span>+8801330111785</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Mails />
                <span>mdtorikul908765@gmail.com</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin />
                <span>Bangladesh</span>
              </div>

              <div className="flex gap-4">
                <Link href="https://github.com/mdtarikulislam1">
                  <Github className="w-5 h-5 cursor-pointer hover:text-primary" />
                </Link>
                <Link href="https://www.linkedin.com/in/mdtorikul/">
                  <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary" />
                </Link>
                <Link href="https://wa.me/8801330111785">
                  <SiWhatsapp className="w-5 h-5 cursor-pointer hover:text-primary" />
                </Link>
                <Link href="https://www.facebook.com/share/1BzNPJyfh7/">
                  <Facebook className="w-5 h-5 cursor-pointer hover:text-primary" />
                </Link>
              </div>
            </CardContent>
          </div>

          <div className="space-y-4 w-full max-w-[370px] lg:max-w-xl">
            <CardContent className="space-y-3">
              <h3 className="global_heading">Send Message</h3>
              <Input placeholder="Your email" />
              <Textarea placeholder="Write your message..." />
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FoodHub — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
