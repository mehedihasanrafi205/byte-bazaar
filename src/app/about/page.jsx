// app/about/page.jsx
"use client";

import { FiTarget, FiEye, FiUsers, FiMail, FiAward, FiClock, FiHeart, FiShield, FiTruck } from "react-icons/fi";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Mehedi Hasan Rafi",
      role: "Founder & CEO",
      bio: "As the visionary founder of Byte Bazaar, Mehedi Hasan Rafi brings over a decade of experience in the tech industry, where he has successfully launched multiple startups focused on e-commerce innovation. His passion for making cutting-edge technology accessible to everyday consumers drives every decision at Byte Bazaar. Mehedi holds a Master's degree in Computer Science from a top-tier university and has been featured in tech publications for his insights on sustainable digital marketplaces. Outside of work, he enjoys mentoring young entrepreneurs and exploring the latest gadgets.",
    },
    {
      name: "Jane Doe",
      role: "Full-Stack Developer",
      bio: "Jane Doe is a seasoned full-stack developer with expertise in React, Node.js, and MongoDB, the very technologies powering Byte Bazaar's robust platform. With five years in software engineering, she specializes in creating scalable, user-centric applications that handle high traffic without compromising on performance. Jane's commitment to clean code and accessibility ensures that our site works flawlessly across devices. In her free time, she contributes to open-source projects and experiments with AI-driven development tools.",
    },
    {
      name: "John Smith",
      role: "UI/UX Designer",
      bio: "John Smith, our lead UI/UX designer, transforms complex user journeys into intuitive, delightful experiences. With a background in graphic design and human-computer interaction from the Rhode Island School of Design, John has collaborated with Fortune 500 companies to refine digital interfaces. At Byte Bazaar, he focuses on minimalist aesthetics that highlight product features while prioritizing ease of navigation. John's design philosophy revolves around empathy—understanding user pain points to create solutions that feel effortless. He's an avid sketchbook enthusiast and often shares design tips on his personal blog.",
    },
    {
      name: "Alice Johnson",
      role: "Marketing Lead",
      bio: "Alice Johnson heads our marketing efforts, blending data-driven strategies with creative storytelling to grow Byte Bazaar's community. With eight years in digital marketing, including stints at major tech firms, she excels in SEO, social media campaigns, and content creation that resonates with tech-savvy audiences. Alice's innovative approaches, such as our viral unboxing series, have boosted our engagement by 300% in the past year. She's certified in Google Analytics and HubSpot, and passionately advocates for inclusive marketing practices. When not strategizing, she dives into sci-fi novels for inspiration.",
    },
  ];

  const coreValues = [
    {
      icon: FiHeart,
      title: "Customer-Centric Innovation",
      description: "We prioritize your needs by continuously innovating to deliver personalized recommendations, fast loading times, and features like one-click checkout. Our goal is to make tech shopping not just convenient, but exciting and tailored to your lifestyle—whether you're a gamer, professional, or casual user seeking everyday essentials.",
    },
    {
      icon: FiShield,
      title: "Unwavering Quality & Trust",
      description: "Every product on our shelves undergoes rigorous vetting to ensure it meets the highest standards of durability and performance. We partner only with reputable brands and offer transparent reviews from verified buyers. Our commitment to trust includes secure payments, easy returns within 30 days, and a satisfaction guarantee that puts your peace of mind first.",
    },
    {
      icon: FiTruck,
      title: "Sustainable & Efficient Delivery",
      description: "We believe in responsible commerce. That's why we use eco-friendly packaging, optimize shipping routes to reduce carbon footprints, and offer carbon-neutral delivery options. With same-day dispatch in major cities and global reach, we ensure your orders arrive promptly while minimizing environmental impact—because great tech should come with a greener future.",
    },
  ];

  return (
    <div className="mt-16">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-linear-to-r from-blue-600 to-purple-700 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            About Byte Bazaar
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            Dive deep into the heart of Byte Bazaar: our origins, unwavering commitment to excellence, and the passionate team shaping the future of tech retail. Since our inception, weve been more than an online storewere a community dedicated to empowering individuals with the tools to thrive in a digital world.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80 mt-6">
            <div className="flex items-center gap-2">
              <FiAward className="w-5 h-5" />
              <span>Over 50K Happy Customers & Growing</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-5 h-5" />
              <span>Founded in 2023, Evolving Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <FiUsers className="w-5 h-5" />
              <span>Curated by Tech Experts Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Our Story Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey So Far</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
            Byte Bazaar was born out of a simple yet profound frustration: why is it so hard to find reliable, affordable tech products without wading through endless ads and unreliable reviews? In early 2023, amidst the booming post-pandemic digital shift, our founder spotted this gap and rallied a team of like-minded innovators. What started as a weekend project in a garage has blossomed into a thriving platform serving thousands across continents. Weve navigated supply chain challenges, embraced emerging trends like AI personalization, and listened intently to customer feedback to refine our offerings. Today, Byte Bazaar stands as a beacon for quality tech, with plans to expand into VR shopping experiences and eco-conscious product lines by 2026. Join us on this exciting ride as we redefine e-commerce one byte at a time.
          </p>
        </section>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                <FiTarget className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  At the core of Byte Bazaar is a mission to democratize access to premium technology, making it affordable and approachable for all. We curate a diverse selection of gadgets—from high-end smartwatches and power banks to essential phone accessories and lifestyle enhancers—sourced directly from manufacturers to cut out middlemen and pass savings to you. Our seamless shopping experience includes intuitive search filters, detailed spec comparisons, and expert buying guides that help you make informed decisions without the overwhelm. Whether youre upgrading your home office setup or gifting a gadget to a loved one, we ensure every interaction is smooth, secure, and satisfying. Beyond transactions, we foster a community through blogs, tutorials, and user forums where tech tips are shared freely, empowering you to get the most from your purchases.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                <FiEye className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  Looking ahead, Byte Bazaar aspires to be the undisputed leader in the global tech marketplace, a one-stop destination where innovation meets accessibility. We dream of a world where technology bridges divides—connecting remote workers, enhancing education for students in underserved areas, and enabling sustainable living through smart devices. To achieve this, were investing in blockchain for transparent supply chains, AR previews for virtual try-ons, and partnerships with emerging startups to spotlight underrepresented inventors. Our vision extends to social impact: by 2030, we aim to donate 5% of profits to digital literacy programs worldwide. In essence, Byte Bazaar isnt just selling products; were building a movement that harnesses technology for positive change, one empowered user at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide every aspect of our operations, from product selection to customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 text-center"
                >
                  <div className="p-4 bg-linear-to-br from-blue-50 to-green-50 rounded-xl mx-auto mb-4 w-fit group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Dedicated Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind Byte Bazaars success is a diverse, collaborative team of experts who pour their hearts into creating an exceptional experience. Each member brings unique skills and a shared enthusiasm for technology, ensuring were always one step ahead in serving you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg mb-2">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute -bottom-1 -right-2 bg-linear-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                    <FiUsers className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-center mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm text-center leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <a
              href=""
              className="flex items-center justify-center gap-2 font-semibold"
            >
              <FiMail className="w-5 h-5" />
              Lets Connect: Share Your Thoughts
            </a>
          </div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
            Whether you have questions about our products, ideas for improvements, or stories from your Byte Bazaar experience, were all ears. Your input shapes our future—reach out today and become part of something bigger.
          </p>
        </div>
      </div>
    </div>
  );
}