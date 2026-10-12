// Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Scroll Styling
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('py-2');
                nav.classList.remove('py-4');
            } else {
                nav.classList.add('py-4');
                nav.classList.remove('py-2');
            }
        });

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Contact Modal Control
        function openContactModal() {
            document.getElementById('contactModal').classList.remove('hidden');
        }

        function closeContactModal() {
            document.getElementById('contactModal').classList.add('hidden');
        }

        // Form Submission with Toast Feedback (No alert window)
        function handleFormSubmit(e) {
            e.preventDefault();
            closeContactModal();
            showToast('Request Received! 🚀', 'We will get back to you in under 24 hours.');
        }

        function claimStrategyCall() {
            openContactModal();
        }

        // Custom Toast Notification System
        function showToast(title, msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toastTitle').textContent = title;
            document.getElementById('toastMsg').textContent = msg;

            toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
            
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
            }, 4000);
        }

        // Service Details Data
        const serviceDetails = [
            {
                title: "Digital Strategy & Growth",
                icon: "compass",
                desc: "We build tailored roadmaps for brands seeking clarity and growth.",
                deliverables: [
                    "Full Brand & Market Audit",
                    "Target Persona Profile",
                    "3-Month Execution Roadmap",
                    "Competitor Positioning Matrix"
                ]
            },
            {
                title: "Social Media Management",
                icon: "share-2",
                desc: "Consistent, visual, and engaging social content designed to build active communities.",
                deliverables: [
                    "Custom Monthly Content Calendar",
                    "Grid Design & Visual Storytelling",
                    "Captions & Hashtag Strategy",
                    "Community Management & Inquiries"
                ]
            },
            {
                title: "Brand Identity & Design",
                icon: "pen-tool",
                desc: "A distinct visual signature that makes your company unforgettable.",
                deliverables: [
                    "Primary & Secondary Logo Marks",
                    "Color System & Typography Pairings",
                    "Visual Identity Brand Guidelines PDF",
                    "Social Media Templates"
                ]
            },
            {
                title: "Content & Copywriting",
                icon: "file-text",
                desc: "Persuasive messaging that connects emotionally and drives conversion.",
                deliverables: [
                    "High-Converting Web Copy",
                    "Social Post Captions & Carousels",
                    "Paid Ad Copies & Headlines",
                    "Editorial Blog Articles"
                ]
            },
            {
                title: "Web Design & Development",
                icon: "laptop",
                desc: "Modern, ultra-fast websites designed to convert visitors into clients.",
                deliverables: [
                    "Responsive Mobile & Desktop Layouts",
                    "Custom UI/UX Prototypes",
                    "SEO-Friendly Code Architecture",
                    "Fast Loading & Analytics Setup"
                ]
            },
            {
                title: "Performance Marketing & SEO",
                icon: "trending-up",
                desc: "Targeted campaigns and search strategies to increase organic and paid traffic.",
                deliverables: [
                    "Meta & Google Ad Campaigns",
                    "On-Page SEO Optimization",
                    "Keyword Strategy Report",
                    "Monthly Analytics Dashboard"
                ]
            }
        ];

        function openServiceModal(index) {
            const data = serviceDetails[index];
            const content = `
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-2xl bg-vibe-light-purple/50 text-vibe-purple flex items-center justify-center">
                        <i data-lucide="${data.icon}" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <span class="text-xs font-bold text-vibe-purple uppercase tracking-wider">Service Scope</span>
                        <h3 class="text-2xl font-extrabold text-vibe-charcoal">${data.title}</h3>
                    </div>
                </div>
                <p class="text-sm text-vibe-charcoal/70">${data.desc}</p>
                <div class="space-y-2 pt-2">
                    <div class="text-xs font-bold text-vibe-charcoal uppercase tracking-wider">Key Deliverables:</div>
                    <ul class="space-y-2">
                        ${data.deliverables.map(item => `
                            <li class="flex items-center gap-2 text-xs sm:text-sm text-vibe-charcoal/80">
                                <i data-lucide="check-circle-2" class="w-4 h-4 text-vibe-purple"></i>
                                <span>${item}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <button onclick="closeServiceModal(); openContactModal();" class="w-full mt-4 py-3 text-white font-extrabold purple-gradient-bg rounded-xl shadow-md hover:opacity-95">
                    Request This Service
                </button>
            `;
            document.getElementById('serviceModalContent').innerHTML = content;
            lucide.createIcons();
            document.getElementById('serviceModal').classList.remove('hidden');
        }

        function closeServiceModal() {
            document.getElementById('serviceModal').classList.add('hidden');
        }

        // Estimator Widget Logic
        let selectedStage = 'startup';

        function selectBizStage(stage) {
            selectedStage = stage;
            document.querySelectorAll('.stage-btn').forEach(btn => {
                btn.classList.remove('border-vibe-purple', 'bg-vibe-light-purple/20');
                btn.classList.add('border-vibe-purple/10', 'bg-white');
            });

            const activeBtn = document.getElementById(`stage-${stage}`);
            activeBtn.classList.add('border-vibe-purple', 'bg-vibe-light-purple/20');
            activeBtn.classList.remove('border-vibe-purple/10', 'bg-white');

            updateEstimator();
        }

        function updateEstimator() {
            const checkedBoxes = Array.from(document.querySelectorAll('.service-checkbox:checked'));
            const count = checkedBoxes.length;

            let turnaround = "1-2 Weeks";
            if (count > 2 && count <= 4) turnaround = "2-3 Weeks";
            if (count > 4) turnaround = "3-4 Weeks";

            const selectedNames = checkedBoxes.map(cb => cb.value).join(', ');

            document.getElementById('estScope').textContent = `${turnaround} • ${count} Module${count !== 1 ? 's' : ''} Selected`;
            document.getElementById('estServicesList').textContent = count > 0 
                ? `Selected: ${selectedNames}` 
                : "Please select at least 1 service to generate roadmap estimate.";
        }

        // Initialize default estimator state
        updateEstimator();
    

// Accessibility and usability enhancements for the mock website.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.getElementById('contactModal')?.classList.add('hidden');
    document.getElementById('serviceModal')?.classList.add('hidden');
    document.getElementById('mobileMenu')?.classList.add('hidden');
  }
});
document.querySelectorAll('#contactModal, #serviceModal').forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.classList.add('hidden');
  });
});
document.querySelectorAll('form[onsubmit="handleFormSubmit(event)"]').forEach((form) => {
  form.querySelectorAll('input, textarea, select').forEach((field, index) => {
    if (!field.name) field.name = field.labels?.[0]?.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_') || `field_${index + 1}`;
  });
});
