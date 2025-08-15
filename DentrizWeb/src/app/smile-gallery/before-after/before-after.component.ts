import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BeforeAfterCase {
  id: number;
  patientName: string;
  treatment: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  testimonial?: string;
}

@Component({
  selector: 'app-before-after',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.css']
})
export class BeforeAfterComponent {
  selectedCase: BeforeAfterCase | null = null;
  showModal = false;

  beforeAfterCases: BeforeAfterCase[] = [
    {
      id: 1,
      patientName: "Sarah M.",
      treatment: "Complete Smile Makeover",
      duration: "6 months",
      beforeImage: "assets/images/gallery/before-after/case1-before.jpg",
      afterImage: "assets/images/gallery/before-after/case1-after.jpg",
      description: "Comprehensive treatment including veneers, whitening, and gum contouring",
      testimonial: "I never thought I could have such a beautiful smile. Dr. Riz and the team were amazing!"
    },
    {
      id: 2,
      patientName: "Michael T.",
      treatment: "Dental Implants",
      duration: "4 months",
      beforeImage: "assets/images/gallery/before-after/case2-before.jpg",
      afterImage: "assets/images/gallery/before-after/case2-after.jpg",
      description: "Multiple dental implants to restore missing teeth",
      testimonial: "The implants look and feel so natural. I can eat anything now!"
    },
    {
      id: 3,
      patientName: "Jennifer L.",
      treatment: "Orthodontic Treatment",
      duration: "18 months",
      beforeImage: "assets/images/gallery/before-after/case3-before.jpg",
      afterImage: "assets/images/gallery/before-after/case3-after.jpg",
      description: "Invisalign treatment to straighten teeth and improve alignment",
      testimonial: "Invisalign was so comfortable and the results are incredible!"
    },
    {
      id: 4,
      patientName: "David K.",
      treatment: "Teeth Whitening & Bonding",
      duration: "2 weeks",
      beforeImage: "assets/images/gallery/before-after/case4-before.jpg",
      afterImage: "assets/images/gallery/before-after/case4-after.jpg",
      description: "Professional whitening and dental bonding for minor imperfections",
      testimonial: "My teeth are so much brighter and I feel more confident!"
    },
    {
      id: 5,
      patientName: "Emily R.",
      treatment: "Porcelain Veneers",
      duration: "3 months",
      beforeImage: "assets/images/gallery/before-after/case5-before.jpg",
      afterImage: "assets/images/gallery/before-after/case5-after.jpg",
      description: "Porcelain veneers to transform smile appearance",
      testimonial: "The veneers look so natural, no one can tell they're not my real teeth!"
    },
    {
      id: 6,
      patientName: "Robert P.",
      treatment: "Full Mouth Reconstruction",
      duration: "8 months",
      beforeImage: "assets/images/gallery/before-after/case6-before.jpg",
      afterImage: "assets/images/gallery/before-after/case6-after.jpg",
      description: "Complete reconstruction including implants, crowns, and cosmetic work",
      testimonial: "This transformation changed my life. I finally have the smile I always wanted!"
    }
  ];

  openModal(caseItem: BeforeAfterCase) {
    this.selectedCase = caseItem;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedCase = null;
  }
}
