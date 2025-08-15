import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TransformationCase {
  id: number;
  patientName: string;
  transformationType: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  procedures: string[];
  testimonial?: string;
}

@Component({
  selector: 'app-smile-transformations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './smile-transformations.component.html',
  styleUrls: ['./smile-transformations.component.css']
})
export class SmileTransformationsComponent {
  selectedCase: TransformationCase | null = null;
  showModal = false;

  transformationCases: TransformationCase[] = [
    {
      id: 1,
      patientName: "Maria S.",
      transformationType: "Complete Smile Makeover",
      duration: "6 months",
      beforeImage: "assets/images/gallery/smile-transformations/transformation1-before.jpg",
      afterImage: "assets/images/gallery/smile-transformations/transformation1-after.jpg",
      description: "Comprehensive transformation including veneers, whitening, and gum contouring",
      procedures: ["Porcelain Veneers", "Teeth Whitening", "Gum Contouring"],
      testimonial: "This transformation gave me the confidence I never had. I can't stop smiling!"
    },
    {
      id: 2,
      patientName: "James L.",
      transformationType: "Orthodontic Transformation",
      duration: "18 months",
      beforeImage: "assets/images/gallery/smile-transformations/transformation2-before.jpg",
      afterImage: "assets/images/gallery/smile-transformations/transformation2-after.jpg",
      description: "Complete orthodontic treatment with Invisalign",
      procedures: ["Invisalign Treatment", "Teeth Whitening"],
      testimonial: "Invisalign was so comfortable and the results are amazing!"
    },
    {
      id: 3,
      patientName: "Lisa K.",
      transformationType: "Dental Implant Transformation",
      duration: "4 months",
      beforeImage: "assets/images/gallery/smile-transformations/transformation3-before.jpg",
      afterImage: "assets/images/gallery/smile-transformations/transformation3-after.jpg",
      description: "Multiple dental implants to restore missing teeth",
      procedures: ["Dental Implants", "Crown Placement"],
      testimonial: "I can eat anything now and my smile looks natural!"
    },
    {
      id: 4,
      patientName: "Robert M.",
      transformationType: "Cosmetic Dentistry Makeover",
      duration: "3 months",
      beforeImage: "assets/images/gallery/smile-transformations/transformation4-before.jpg",
      afterImage: "assets/images/gallery/smile-transformations/transformation4-after.jpg",
      description: "Cosmetic bonding and whitening transformation",
      procedures: ["Composite Bonding", "Professional Whitening"],
      testimonial: "The bonding work is so natural, no one can tell!"
    },
    {
      id: 5,
      patientName: "Sarah W.",
      transformationType: "Veneer Transformation",
      duration: "2 months",
      beforeImage: "assets/images/gallery/smile-transformations/transformation5-before.jpg",
      afterImage: "assets/images/gallery/smile-transformations/transformation5-after.jpg",
      description: "Porcelain veneers for a perfect smile",
      procedures: ["Porcelain Veneers", "Gum Contouring"],
      testimonial: "My veneers look so natural and beautiful!"
    },
    {
      id: 6,
      patientName: "Michael P.",
      transformationType: "Full Mouth Reconstruction",
      duration: "8 months",
      beforeImage: "assets/images/gallery/smile-transformations/transformation6-before.jpg",
      afterImage: "assets/images/gallery/smile-transformations/transformation6-after.jpg",
      description: "Complete reconstruction including implants and cosmetic work",
      procedures: ["Dental Implants", "Crowns", "Veneers", "Whitening"],
      testimonial: "This transformation changed my life completely!"
    },
    {
      id: 7,
      patientName: "Jennifer R.",
      transformationType: "Braces to Beautiful",
      duration: "24 months",
      beforeImage: "assets/images/gallery/smile-transformations/transformation7-before.jpg",
      afterImage: "assets/images/gallery/smile-transformations/transformation7-after.jpg",
      description: "Traditional braces treatment for severe misalignment",
      procedures: ["Traditional Braces", "Teeth Whitening", "Retainer"],
      testimonial: "Worth every moment! My smile is perfect now!"
    },
    {
      id: 8,
      patientName: "David T.",
      transformationType: "Emergency to Excellence",
      duration: "5 months",
      beforeImage: "assets/images/gallery/smile-transformations/transformation8-before.jpg",
      afterImage: "assets/images/gallery/smile-transformations/transformation8-after.jpg",
      description: "Emergency dental work transformed into beautiful smile",
      procedures: ["Emergency Treatment", "Implants", "Cosmetic Work"],
      testimonial: "From pain to perfection - amazing transformation!"
    }
  ];

  openModal(caseItem: TransformationCase) {
    this.selectedCase = caseItem;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedCase = null;
  }
}
