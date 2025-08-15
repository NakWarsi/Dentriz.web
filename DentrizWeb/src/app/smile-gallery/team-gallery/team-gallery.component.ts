import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  specialization: string;
  experience: string;
  education: string;
  image: string;
  bio: string;
}

@Component({
  selector: 'app-team-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './team-gallery.component.html',
  styleUrls: ['./team-gallery.component.css']
})
export class TeamGalleryComponent {
  selectedMember: TeamMember | null = null;
  showModal = false;

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Lead Dentist",
      specialization: "General & Cosmetic Dentistry",
      experience: "15+ years",
      education: "DDS, University of California",
      image: "assets/images/gallery/team-gallery/doctor1.jpg",
      bio: "Dr. Johnson is our lead dentist with over 15 years of experience in general and cosmetic dentistry. She specializes in smile makeovers and has helped hundreds of patients achieve their dream smiles."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      position: "Orthodontist",
      specialization: "Orthodontics & Invisalign",
      experience: "12+ years",
      education: "DDS, Orthodontics Certificate",
      image: "assets/images/gallery/team-gallery/doctor2.jpg",
      bio: "Dr. Chen is our specialist orthodontist with expertise in traditional braces and Invisalign treatment. He has successfully treated patients of all ages with various orthodontic needs."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      position: "Oral Surgeon",
      specialization: "Oral Surgery & Implants",
      experience: "10+ years",
      education: "DDS, Oral Surgery Residency",
      image: "assets/images/gallery/team-gallery/doctor3.jpg",
      bio: "Dr. Rodriguez specializes in oral surgery and dental implants. She has extensive experience in complex surgical procedures and implant placement."
    },
    {
      id: 4,
      name: "Lisa Thompson",
      position: "Dental Hygienist",
      specialization: "Preventive Care",
      experience: "8+ years",
      education: "Dental Hygiene Degree",
      image: "assets/images/gallery/team-gallery/hygienist1.jpg",
      bio: "Lisa is our senior dental hygienist who focuses on preventive care and patient education. She is passionate about helping patients maintain optimal oral health."
    },
    {
      id: 5,
      name: "Maria Garcia",
      position: "Dental Hygienist",
      specialization: "Periodontal Therapy",
      experience: "6+ years",
      education: "Dental Hygiene Degree",
      image: "assets/images/gallery/team-gallery/hygienist2.jpg",
      bio: "Maria specializes in periodontal therapy and works closely with patients who have gum disease. She is known for her gentle approach and thorough care."
    },
    {
      id: 6,
      name: "David Wilson",
      position: "Dental Assistant",
      specialization: "Surgical Procedures",
      experience: "5+ years",
      education: "Dental Assistant Certification",
      image: "assets/images/gallery/team-gallery/assistant1.jpg",
      bio: "David is our experienced dental assistant who specializes in surgical procedures. He works closely with our oral surgeon to ensure smooth and efficient treatments."
    },
    {
      id: 7,
      name: "Jennifer Lee",
      position: "Dental Assistant",
      specialization: "Cosmetic Procedures",
      experience: "4+ years",
      education: "Dental Assistant Certification",
      image: "assets/images/gallery/team-gallery/assistant2.jpg",
      bio: "Jennifer assists with cosmetic procedures and has a keen eye for detail. She helps ensure our cosmetic treatments achieve the best possible results."
    }
  ];

  openModal(member: TeamMember) {
    this.selectedMember = member;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedMember = null;
  }
}
