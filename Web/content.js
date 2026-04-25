const PORTFOLIO_CONTENT = {
  id: {
    profile: {
      firstName: "Irsyad Adi",
      lastName: "Rochman",
      status: "STATUS: OPEN TO WORK · SIDOARJO, EAST JAVA",
      subtitle: "Continuous Improvement · Data Analyst · Manufacturing Ops",
      description: "Profesional Continuous Improvement dengan pengalaman langsung di operasional manufaktur. Spesialisasi optimasi proses berbasis data dan lean methodology. Terbukti menghasilkan efisiensi terukur melalui dashboard interaktif di Kraft Heinz dan analisis 10.000+ rekord data di Narasio Data.",
      cvButton: "⬇ Unduh CV",
      contactButton: "Hubungi Saya",
      photoAlt: "Foto Profil Irsyad",
      email: "irsyad.adi1222@gmail.com",
      phone: "082231681309",
      linkedinLabel: "in irsyadadi",
      linkedinUrl: "https://linkedin.com/in/irsyadadi",
      metrics: [
        { value: "3+", label: "Industri" },
        { value: "20+", label: "Tank Monitor" },
        { value: "10K+", label: "Records" }
      ]
    },
    projects: [
      {
        title: "Fermentation Tank Dashboard — Kraft Heinz",
        description: "Dashboard interaktif real-time memantau 20+ tangki fermentasi: usia tangki, tren TN, pH, NaCl, warna. Mempercepat deteksi anomali proses secara signifikan.",
        tags: ["Power BI", "Data Integration", "Manufacturing", "Real-time"]
      },
      {
        title: "Multi-Source Data Pipeline — TN Harvest",
        description: "Pipeline integrasi data dari 3+ sumber untuk pelacakan pencapaian TN saat panen, menghasilkan insight actionable untuk optimasi keputusan operasional berbasis data.",
        tags: ["Python", "SQL", "Data Processing", "CI"]
      },
      {
        title: "Defect Resolution Workflow Optimization",
        description: "Analisis dan rekomendasi berbasis data untuk mengoptimalkan alur penyelesaian defek produksi — mengurangi downtime dan meningkatkan efisiensi lini produksi.",
        tags: ["Lean", "Process Mapping", "OEE", "CI"]
      },
      {
        title: "Business Analytics Dashboard — Narasio",
        description: "5+ dashboard interaktif dari 10.000+ rekord tervalidasi untuk mengkomunikasikan temuan bisnis kepada stakeholder secara efektif dan komprehensif.",
        tags: ["Tableau", "Looker Studio", "Data Cleaning", "Visualization"]
      },
      {
        title: "ME Equipment Design — Yanmar R&D",
        description: "Desain peralatan ME dan analisis kerusakan durabilitas produk Yanmar menggunakan AutoCAD, termasuk dokumentasi teknis dan pelaporan hasil uji ke supervisor R&D.",
        tags: ["AutoCAD", "Technical Drawing", "R&D", "Durability Testing"]
      },
      {
        title: "Energy Data Analytics — Renewable Systems",
        description: "Proyek analitik data energi untuk monitoring dan optimasi sistem energi terbarukan — bagian dari sertifikasi Energy Data Analyst KEMNAKER 2025.",
        tags: ["Energy Analytics", "Python", "Monitoring", "Renewable"]
      }
    ],
    certifications: [
      { year: "2025", title: "Energy Data Analyst: Monitoring & Optimization for Renewable Systems", issuer: "KEMNAKER — Kementerian Ketenagakerjaan RI" },
      { year: "2025", title: "OHS Emergency Response for Industry Oil & Gas", issuer: "Mutiara Mutu Sertifikasi" },
      { year: "2024", title: "Microsoft Certified: Azure Data Fundamentals", issuer: "Microsoft" },
      { year: "2023", title: "Google Big Data and Machine Learning Fundamentals", issuer: "Coursera" },
      { year: "2023", title: "Microsoft 365 Certified: Fundamentals", issuer: "Microsoft" },
      { year: "2023", title: "Belajar Dasar Manajemen Proyek", issuer: "Dicoding Indonesia" }
    ],
    awards: [
      { year: "2025", icon: "🛢", title: "Peserta — Ngobrol Asik Hulu Migas (Peran Gen Z dalam Industri Hulu Migas)", issuer: "SKK Migas" },
      { year: "2024", icon: "🎓", title: "Awardee — Beasiswa Pendidikan Tinggi Non-Akademik", issuer: "Pemerintah Kabupaten Sidoarjo" },
      { year: "2022", icon: "🥇", title: "Juara 1 — Cyber Security 'Protect Your Privacy for Millennial'", issuer: "Universitas Negeri Surabaya" },
      { year: "2020", icon: "🥈", title: "Runner Up — Kontes Desain AutoCAD (Nasional)", issuer: "Universitas Tidar Magelang" }
    ],
    education: [
      {
        type: "Pendidikan Formal",
        degree: "S1 Sistem Informasi",
        school: "Universitas Negeri Surabaya (UNESA) · Surabaya, East Java",
        period: "2021 – 2026 · Data Science & Business Intelligence",
        accent: false,
        bullets: [
          "Class Representative — koordinasi 30+ mahasiswa, penghubung antara mahasiswa, dosen, dan departemen universitas.",
          "Konsentrasi Data Science & BI — membangun kemampuan analitik dan pengambilan keputusan berbasis data untuk lingkungan industri."
        ]
      },
      {
        type: "Pendidikan Vokasi",
        degree: "Desain Rancang Bangun Kapal",
        school: "SMKN 3 Buduran Perkapalan Sidoarjo (STEMAPAL) · Sidoarjo",
        period: "Agu 2018 – Agu 2021 · Ship Design",
        accent: true,
        bullets: [
          "Keahlian teknis desain dan gambar teknik kapal menggunakan AutoCAD.",
          "Fondasi kuat dalam pemahaman struktur dan spesifikasi teknis — dasar untuk karir R&D dan engineering."
        ]
      }
    ],
    organizations: [
      {
        date: "Des 2022",
        badge: "Ketua",
        role: "Ketua — Badan Pengawas Pemilu UNESA",
        unit: "Universitas Negeri Surabaya",
        badgeStyle: "",
        bullets: [
          "Memimpin pengawasan pemilu seluruh kampus, mengelola pemungutan suara, integritas, dan verifikasi hasil untuk 100+ pemilih mahasiswa.",
          "Menilai kualifikasi kandidat dan memastikan kepatuhan ketat terhadap pedoman pemilihan dan standar transparansi."
        ]
      },
      {
        date: "Apr 2023",
        badge: "Logistik",
        role: "Koordinator Logistik & Perlengkapan",
        unit: "Forum Musyawarah Mahasiswa",
        badgeStyle: "background:var(--accent2)",
        bullets: [
          "Mengelola perencanaan logistik end-to-end dan pengadaan dukungan teknis & fasilitas untuk musyawarah mahasiswa skala besar."
        ]
      },
      {
        date: "Agu 2022",
        badge: "Liaison",
        role: "Orientation Liaison Officer",
        unit: "Himpunan Mahasiswa Teknik Informatika — UNESA",
        badgeStyle: "background:var(--accent3);color:#0d1b2a",
        bullets: [
          "Mengkoordinasikan kegiatan orientasi mahasiswa baru: integrasi akademik, pengenalan kampus, dan inisiatif community-building."
        ]
      }
    ]
  },
  en: {
    profile: {
      firstName: "Irsyad Adi",
      lastName: "Rochman",
      status: "STATUS: OPEN TO WORK · SIDOARJO, EAST JAVA",
      subtitle: "Continuous Improvement · Data Analyst · Manufacturing Ops",
      description: "Continuous Improvement professional with hands-on experience in manufacturing and industrial operations. Specializing in data-driven process optimization and lean methodologies. Proven track record of delivering measurable efficiency gains through interactive dashboards at Kraft Heinz and 10,000+ record data analysis at Narasio Data.",
      cvButton: "⬇ Download CV",
      contactButton: "Contact Me",
      photoAlt: "Irsyad profile photo",
      email: "irsyad.adi1222@gmail.com",
      phone: "082231681309",
      linkedinLabel: "in irsyadadi",
      linkedinUrl: "https://linkedin.com/in/irsyadadi",
      metrics: [
        { value: "3+", label: "Industries" },
        { value: "20+", label: "Tank Monitor" },
        { value: "10K+", label: "Records" }
      ]
    },
    projects: [
      {
        title: "Fermentation Tank Dashboard — Kraft Heinz",
        description: "Real-time interactive dashboard monitoring 20+ fermentation tanks: tank age, TN trends, pH, NaCl, color. Significantly accelerated process anomaly detection.",
        tags: ["Power BI", "Data Integration", "Manufacturing", "Real-time"]
      },
      {
        title: "Multi-Source Data Pipeline — TN Harvest",
        description: "Data integration pipeline from 3+ sources for TN harvest tracking and actionable operational insights.",
        tags: ["Python", "SQL", "Data Processing", "CI"]
      },
      {
        title: "Defect Resolution Workflow Optimization",
        description: "Data-driven analysis to optimize defect resolution workflows — reducing downtime and improving production line efficiency.",
        tags: ["Lean", "Process Mapping", "OEE", "CI"]
      },
      {
        title: "Business Analytics Dashboard — Narasio",
        description: "5+ interactive dashboards from 10,000+ validated records to effectively communicate business findings to stakeholders.",
        tags: ["Tableau", "Looker Studio", "Data Cleaning", "Visualization"]
      },
      {
        title: "ME Equipment Design — Yanmar R&D",
        description: "ME equipment design and Yanmar product durability analysis using AutoCAD with complete technical documentation.",
        tags: ["AutoCAD", "Technical Drawing", "R&D", "Durability Testing"]
      },
      {
        title: "Energy Data Analytics — Renewable Systems",
        description: "Energy data analytics project for monitoring and optimizing renewable energy systems (KEMNAKER certification 2025).",
        tags: ["Energy Analytics", "Python", "Monitoring", "Renewable"]
      }
    ],
    certifications: [
      { year: "2025", title: "Energy Data Analyst: Monitoring & Optimization for Renewable Systems", issuer: "KEMNAKER — Ministry of Manpower of the Republic of Indonesia" },
      { year: "2025", title: "OHS Emergency Response for Industry Oil & Gas", issuer: "Mutiara Mutu Sertifikasi" },
      { year: "2024", title: "Microsoft Certified: Azure Data Fundamentals", issuer: "Microsoft" },
      { year: "2023", title: "Google Big Data and Machine Learning Fundamentals", issuer: "Coursera" },
      { year: "2023", title: "Microsoft 365 Certified: Fundamentals", issuer: "Microsoft" },
      { year: "2023", title: "Project Management Fundamentals", issuer: "Dicoding Indonesia" }
    ],
    awards: [
      { year: "2025", icon: "🛢", title: "Participant — Ngobrol Asik Hulu Migas (Gen Z's Role in the Upstream Oil and Gas Industry)", issuer: "SKK Migas" },
      { year: "2024", icon: "🎓", title: "Awardee — Non-Academic Higher Education Scholarship", issuer: "Sidoarjo Regency Government" },
      { year: "2022", icon: "🥇", title: "1st Place — Cyber Security 'Protect Your Privacy for Millennial'", issuer: "Universitas Negeri Surabaya" },
      { year: "2020", icon: "🥈", title: "Runner Up — National AutoCAD Design Contest", issuer: "Universitas Tidar Magelang" }
    ],
    education: [
      {
        type: "Formal Education",
        degree: "Bachelor of Information Systems",
        school: "Universitas Negeri Surabaya (UNESA) · Surabaya, East Java",
        period: "2021 – 2026 · Data Science & Business Intelligence",
        accent: false,
        bullets: [
          "Class Representative — coordinated 30+ students and served as a liaison between students, lecturers, and the university department.",
          "Data Science & BI concentration — developed analytical and data-driven decision-making capabilities for industrial environments."
        ]
      },
      {
        type: "Vocational Education",
        degree: "Ship Design and Construction",
        school: "SMKN 3 Buduran Perkapalan Sidoarjo (STEMAPAL) · Sidoarjo",
        period: "Aug 2018 – Aug 2021 · Ship Design",
        accent: true,
        bullets: [
          "Technical expertise in ship design and engineering drawings using AutoCAD.",
          "Strong foundation in structural understanding and technical specifications — supporting a career path in R&D and engineering."
        ]
      }
    ],
    organizations: [
      {
        date: "Dec 2022",
        badge: "Chair",
        role: "Chair — UNESA Election Supervisory Board",
        unit: "Universitas Negeri Surabaya",
        badgeStyle: "",
        bullets: [
          "Led campus-wide election supervision, managing voting, integrity, and result verification for 100+ student voters.",
          "Assessed candidate qualifications and ensured strict compliance with election guidelines and transparency standards."
        ]
      },
      {
        date: "Apr 2023",
        badge: "Logistics",
        role: "Logistics & Equipment Coordinator",
        unit: "Student Deliberation Forum",
        badgeStyle: "background:var(--accent2)",
        bullets: [
          "Managed end-to-end logistics planning and procurement of technical support and facilities for a large-scale student deliberation forum."
        ]
      },
      {
        date: "Aug 2022",
        badge: "Liaison",
        role: "Orientation Liaison Officer",
        unit: "Informatics Engineering Student Association — UNESA",
        badgeStyle: "background:var(--accent3);color:#0d1b2a",
        bullets: [
          "Coordinated new student orientation activities, including academic integration, campus introduction, and community-building initiatives."
        ]
      }
    ]
  }
};
