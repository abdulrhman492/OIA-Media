// AOS Library
AOS.init();

// Handle Translate
const translations = {
  en: {
    // Navbar
    "nav-title1": "menu",
    "nav-item1": "home",
    "nav-item2": "about",
    "nav-item3": "services",
    "nav-item4": "our team",
    "nav-title2": "get in touch",
    "nav-item5": "contact us",
    "nav-item6": "get hired",
    "nav-title3": "get social",
    // Hero Section
    "hero-title": "Welcome to OIA",
    "hero-description1":
      "We're all about making your online presence shine. Whether you're just starting out or already a big player, we've got your back with fresh and creative strategies to get you noticed.",
    "hero-description2":
      "From social media to search engine smarts, we've got the tools and the team to help your business grow online.",
    "hero-description3": "Let's make magic happen together at OIA Media!",
    "hero-btn-text": "CONTACT THE TEAM",
    "hero-btn-description": "Schedule a FREE call now",
    // About Section
    "about-title": "TOTAL REVENUE GENERATED",
    "about-number": "$118 THOUSAND",
    "about-card1": "CLIENT HELPED",
    "about-card2": "TOTAL AD SPEND",
    "about-card3": "OFFICES",
    "about-card4": "SERVICES OFFER",
    "about-text": "OIA Media",
    "about-description":
      "Our philosophy is simple yet powerful: we believe in the transformative potential of digital marketing to empower businesses of all sizes. We're committed to delivering excellence through a combination of creativity, innovation, and genuine care for our clients' success.",
    "about-notice": "Need a boost to your company ?",
    "about-btn-text": "CONTACT THE TEAM",
    "about-btn-description": "Schedule a FREE call now",
    // Features Section
    "features-title": "OH WAIT...",
    "features-description": "What do we provide ?",
    "features-item": "DIGITAL MARKETING",
    "features-item-description1":
      "At OIA Media, we specialize in digital marketing strategies that boost your online visibility and sales. Our expertise includes smart use of social media, effective SEO, and strategic paid advertising to help your business thrive in the digital world.",
    "features-item-description2":
      "We view our relationship with you as a partnership, customizing our approaches to meet your unique needs. This involves a sharp focus on paid ads, where we target your potential customers precisely to ensure that your investment yields maximum returns.",
    "features-item-description3":
      "Committed to your success, we aim to enhance your online presence and increase sales through a blend of organic and paid strategies. Let's collaborate to make your brand stand out and drive higher sales with effective digital marketing. Talking about Return on Ad Spend (ROAS), if we don't generate more sales than you spend, you get your money back — that's a guarantee.",
    "features-items-title": "We also provide much more",
    "features-items-description":
      "Of course your organization needs a stunning look, you just don't worry about it, It's on US!",
    "features-card1": "BRANDING",
    "features-card2": "WEB DESIGN",
    "features-card3": "CONTENT CREATION",
    "features-card4": "SOCIAL MEDIA MANAGEMENT",
    // Clients Section
    "clients-title": "Big names that trust us",
    "clients-description":
      "We're honored to work with some of the biggest names in the industry who trust us to elevate their digital presence.",
    // Team Section
    "team-title": "MEET THE A-TEAM",
    "team-description1":
      "Dive into a world where unparalleled talent meets unmatched experience. Our A-Team is the core of our agency, boasting a collective 10 years of expertise across various industries. We're a dynamic group of visionaries, each selected for our unique skills and dedication to excellence.",
    "team-description2":
      "Our broad spectrum of knowledge empowers us to deliver innovative solutions that redefine standards. Whether it's digital marketing, business strategy, or creative execution, we're at the cutting edge, Ensuring our clients not to only keep the pace but lead the pack.",
    "team-description3":
      "Partnering with us means joining forces with a team dedicated to your success. We blend collaboration with proven methods to turn challenges into triumphs.",
    "team-description4":
      "Experience the future of digital success with the A-Team.",
    // Contact Section
    "contact-card-title": "SCHEDULE A FREE CALL WITH OMAR",
    "contact-card-description":
      "By the conclusion of this demo call, you will have a thorough understanding of the actionable steps your business can implement to achieve consistent and reliable outcomes online through strategic Digital Marketing. We will explore the effective use of Funnels and Paid Advertising, providing you with a clear roadmap to enhance your digital marketing strategies.",
    "contact-items-title": "THIS CALL IS PERFECT FOR :",
    "contact-item1":
      "Businesses wanting to turn their website into a high-converting funnel using digital marketing.",
    "contact-item2":
      "Offline businesses ready to go online with effective digital marketing strategies.",
    "contact-item3":
      "Companies aiming to boost revenue with sales funnels and conversion optimization.",
    "contact-item4":
      "Those looking to improve conversion rates and order value through targeted paid ads.",
    "contact-item5":
      "Businesses seeking a reliable agency with expertise in digital marketing and paid advertising.",
    "contact-card-btn": "SCHEDULE A CALL NOW",
    // Opinions Section
    "opinion-title": "Client's opinions about us",
    "opinion-card1": "Their service boosted our sales. Worth the investment.",
    "opinion-card2":
      "They responded to our needs quickly. Very cooperative team.",
    "opinion-card3":
      "Amazed by their creative ideas. Completely different marketing.",
    "opinion-card4":
      "Tangible and fast results. Clear improvement in our digital presence.",
    "opinion-card5":
      "Their prices are fair for the quality. Excellent value for money.",
    "opinion-card6":
      "They exceeded our expectations with their personalized service. We felt in safe hands.",
    // Services Page
    "services-title": "KNOW MORE ABOUT OUR SERVICES",
    "services-item1": "DIGITAL MARKETING",
    "services-item2": "BRANDING",
    "services-item3": "WEB DESIGN",
    "services-item4": "CONTENT CREATION",
    "services-item5": "SOCIAL MEDIA MARKETING",
    "services-item1-title": "DIGITAL MARKETING",
    "services-item1-description1":
      "In today's rapidly evolving digital landscape, our agency is committed to employing a multifaceted approach to effectively capture the attention of your target audience. At the heart of our strategy lies paid advertising, a dynamic tool that thrusts your brand into the spotlight and ensures instant visibility. By strategically placing ads on search engines and social media platforms, we leverage the power of pay-per-click (PPC) campaigns to drive targeted traffic to your website, delivering measurable results and a significant return on investment.",
    "services-item1-description2":
      "Complementing the immediacy provided by paid advertising, our content marketing approach is designed to build long-term relationships with your audience. Through the creation and distribution of valuable, relevant, and engaging content, we not only attract and retain a specific audience but also establish your brand as a thought leader in your industry. From informative articles to compelling videos and infographics, our content marketing strategy fosters a connection with your audience that goes beyond transactions, enhancing trust and loyalty.",
    "services-item1-description3":
      "Parallel to these efforts, our cold outreach marketing techniques provide a proactive approach to outreach, enabling us to explore new markets and attract potential customers who may not yet be aware of your brand. By crafting personalized messages and utilizing targeted email campaigns, we introduce your business to a wider audience, paving the way for new opportunities and growth. This strategic outreach ensures that your brand makes an unforgettable first impression, setting the stage for future interactions.",
    "services-item1-description4":
      "To amplify the reach of our content marketing and cold outreach efforts, our expertise in search engine marketing (SEM) plays a crucial role in boosting your online presence. By combining the power of search engine optimization (SEO) with paid advertising within the framework of SEM, we ensure your brand achieves prominent placement on search engine results pages. This dual approach not only increases immediate visibility through ads but also builds a sustainable online presence that continues to attract organic traffic over time.",
    "services-item1-description5":
      "Finally, at the core of our digital marketing strategy lies the power of paid advertising. This method provides the immediacy and precision essential for presenting your brand to the ideal audience at the most critical moments. Utilizing advanced platforms such as Google Ads, Facebook Ads, TikTok Ads, Snapchat Ads, and LinkedIn Ads, we design precisely targeted campaigns that resonate with your audience, guaranteed to deliver impactful results. Our approach is based on a deep understanding of the behaviors and needs of your target market, enabling us to create ads that effectively attract and encourage engagement.",
    "services-item1-description6":
      "By integrating paid advertising with other marketing strategies, we offer a robust pathway to achieving success in the contemporary digital market. Combining diverse tools and tactics ensures that your brand achieves the presence and impact necessary to meet and exceed its goals.",
    "services-item2-title": "BRANDING",
    "services-item2-description1":
      "At our company, we believe that the power of branding is foundational to any success story in the modern market. Through our deep understanding of the challenges and opportunities within the digital realm, we provide integrated branding solutions that enhance your brand's value and distinguish it in a competitive marketplace.",
    "services-item2-description2":
      "We specialize in developing unique brand identities that build trust and establish an emotional connection with the audience. Through an analytical and innovative process, we aim to understand your vision and goals to deliver an unforgettable brand experience that reflects your company's values and underscores its core principles.",
    "services-item2-description3":
      "From brand analysis, where we examine the market and competitors to ensure your brand stands out, to the development of brand strategies that guide your communication and define your core message and values. We craft appealing visual identities that effectively tell your story and express the essence of your brand, emphasizing the brand experience at every customer touchpoint to ensure consistency and cohesion.",
    "services-item2-description4":
      "With our company, your brand is not merely a symbol of your products or services but a living story that grows and evolves with every interaction. This ensures a unique and integrated brand experience that truly reflects the spirit of your company and its aspirations.",
    "services-item2-description5": "",
    "services-item2-description6": "",
    "services-item3-title": "WEB DESIGN",
    "services-item3-description1":
      "At our company, we view web design and development as essential components of your brand's digital strategy. Your website is a key part of your brand identity, acting as the primary platform where your brand's story connects with your audience.",
    "services-item3-description2":
      "We are experts in crafting custom websites that reflect your brand's values and goals, ensuring they are visually stunning, user-friendly, and optimized for search engines. This approach guarantees a seamless experience for your visitors across all devices, boosting your brand's online visibility and engagement.",
    "services-item3-description3":
      "Our team utilizes the latest technologies to create websites that are fast, secure, and scalable, catering to all your needs, whether it's an e-commerce site, a corporate website, or a personal blog. We understand the importance of your website in making a first impression, thus we focus on delivering immersive experiences that not only showcase your brand but also drive visitor conversion.",
    "services-item3-description4":
      "Every aspect of your website, from the strategic placement of calls to action to content that speaks in your brand's voice, is designed to complement your overall branding strategy. Our goal is to ensure your website stands out, builds brand equity, and supports your business's growth.",
    "services-item3-description5":
      "Let us help you create a website that truly represents your brand and engages your audience in the digital realm.",
    "services-item3-description6": "",
    "services-item4-title": "CONTENT CREATION",
    "services-item4-description1":
      "At our company, we understand the pivotal role content creation plays in elevating a brand's presence and engaging its audience. Content is not just about filling your channels; it's about crafting stories that resonate, educate, and inspire your audience, while simultaneously reflecting your brand's voice and ethos.",
    "services-item4-description2":
      "Our expertise lies in creating bespoke content that aligns with your branding strategy, designed to captivate your target audience and reinforce your brand identity. From compelling blog posts, engaging videos, to informative infographic, we produce content that not only informs but also entertains, creating a lasting impact.",
    "services-item4-description3":
      "We believe in the power of content to build relationships. Our approach involves a deep dive into your brand's values and goals, ensuring every piece of content we produce serves a purpose, whether it's to drive traffic, generate leads, or increase brand awareness. Our team of skilled content creators leverages data-driven insights to craft content that speaks directly to the hearts and minds of your audience, ensuring maximum engagement.",
    "services-item4-description4":
      "In a world where content is king, our services extend beyond mere creation. We strategize on distribution across the right platforms to ensure your content reaches its intended audience, amplifying your brand's message across the digital landscape. Our holistic approach to content creation and distribution is designed to make your brand stand out, connect on a deeper level with your audience, and drive tangible results for your business.",
    "services-item4-description5":
      "Let us transform your brand's narrative with content that captivates, convinces, and converts. With us, your content will not just be seen—it will be remembered and acted upon.",
    "services-item4-description6": "",
    "services-item5-title": "SOCIAL MEDIA MARKETING",
    "services-item5-description1":
      "At our company, we adopt a comprehensive and specialized approach to managing social media that goes beyond simple content interaction. We understand that the key to enhancing your brand lies in effective engagement and continuous communication with your audience. Therefore, we offer social media management services that focus on responding to your audience's needs and communicating with them in a way that reflects your brand's values and message.",
    "services-item5-description2":
      "Audience Engagement: We consider audience engagement a vital part of our brand strategy. Therefore, we actively manage interactions, from responding to comments and private messages to participating in relevant conversations, to build a strong relationship with your audience.",
    "services-item5-description3":
      "Responding to Inquiries: We ensure quick and detailed responses to all your audience's inquiries, enhancing their trust in your brand and reflecting your commitment to customer service.",
    "services-item5-description4":
      "Monitoring Comments and Crisis Response: We closely monitor comments and conversations to effectively deal with any negative feedback or potential crises, protecting your brand's reputation.",
    "services-item5-description5":
      "Performance Analysis and Reporting: We provide periodic analytics that show your brand's performance on social media, enabling us to adjust strategies according to trends and audience preferences.",
    "services-item5-description6":
      "At our company, we treat social media as a vital tool for building and enhancing your relationship with your audience. By managing social media strategically and effectively, we ensure that your brand is always at the heart of the conversation, enhancing its market position and contributing to the growth of your business.",
    // Contact Page
    "contact-title": "Contact through ",
    "contact-whatsapp": "WhatsApp",
    "contact-whatsapp-description":
      "Easiest way to reach the team and schedule a meeting",
    "contact-form-notice":
      "( Our recommendation for a more professional meeting )",
    "contact-form-title": "Would you let us know more about you ?",
    "contact-form-description":
      "Briefly, Introduce yourself through those next fields",
    "contact-field1-title": "Personal information",
    "contact-field1-input1": "Name",
    "contact-field1-input2": "Phone Number",
    "contact-field1-input3": "Email",
    "contact-field1-input4": "Instagram username ( optional )",
    "contact-field2-title": "About your company / organization",
    "contact-field2-input1": "Company name",
    "contact-field2-input2": "Company Scale",
    "contact-field2-input2-option1": "2 - 5",
    "contact-field2-input2-option2": "5 - 10",
    "contact-field2-input2-option3": "10 - 50",
    "contact-field2-input2-option4": "50 - 100",
    "contact-field2-input3": "Company Industry",
    "contact-field2-input4": "Company Recent Sales",
    "contact-field2-input4-option1": " Less than $5K",
    "contact-field2-input4-option2": "$5K - $10K",
    "contact-field2-input4-option3": "$10K - $50K",
    "contact-field2-input4-option4": "More than $50K",
    "contact-field2-input5": "Choose your country",
    "contact-field2-input6": "Website URL ( optional )",
    "contact-field2-input7": "Instagram username ( optional )",
    "contact-field2-input8": "Is your company registered ?",
    "contact-field2-input8-option1": "No",
    "contact-field2-input8-option2": "Yes",
    "contact-checkbox-title": "Pick the services you are looking for !",
    "contact-checkbox-description": "You can choose more than one service ",
    "contact-date-title": "Pick a date you'd like to meet on",
    "contact-date-description": "Enter a subtitle date based on your schedule",
    "contact-form-btn": "Confirm Your Meeting",
    "contact-team-title": "Wanna know more about our team !",
    "contact-member1-description1":
      "Meet Omar Yahia, the strategic force and founding spirit behind our agency. As CEO and Founder, Omar embodies the essence of visionary leadership, backed by over 3 years of rich experience in managing businesses and mastering the intricacies of digital marketing. His journey is marked by a diverse portfolio, having navigated through various industries and steering big clients towards their strategic goals with unparalleled smoothness and efficiency.",
    "contact-member1-description2":
      "Omar's leadership is defined by his ability to foresee market trends and adapt strategies that not only meet but exceed the evolving digital marketing landscape. His expertise isn't just in leading our team; it's about fostering an environment where innovation thrives, and client satisfaction is paramount. Omar's approach to management and digital marketing is holistic, ensuring that our agency not only anticipates the needs of our clients but also delivers forward-thinking solutions that drive measurable success.",
    "contact-member1-description3":
      "Under Omar's guidance, our agency has become synonymous with excellence, pushing the boundaries of what's possible in digital marketing and business management. His dedication to our clients' growth and his commitment to our team's development are what make Omar Yahia not just our CEO and Founder but our chief architect of success.",
    "contact-member2-description1":
      "Introducing Mostafa, our esteemed Creative Director, whose visionary leadership and over five years of experience in creative advertising have significantly elevated our agency's portfolio. Specializing in branding identity, logo design, social media designs, content creation, and UI/UX web design, Mostafa’s broad skill set and innovative approach have been pivotal in transforming brands and crafting memorable digital experiences.",
    "contact-member2-description2":
      "Mostafa combines creative flair with strategic insight, ensuring that every project not only looks stunning but also aligns perfectly with our clients’ goals. His work is characterized by a deep understanding of the latest design trends and technologies, which he seamlessly integrates into projects to produce engaging and effective results.",
    "contact-member2-description3":
      "Under his guidance, our creative team has flourished, producing work that stands out for its creativity and impact. Mostafa’s dedication to excellence and his ability to anticipate and adapt to the ever-evolving digital landscape make him a key asset to our agency and the brands we serve.",
    "contact-member3-description1":
      "Meet Abdelrahman Samir, our Chief Marketing Officer, whose expertise in digital marketing, especially in paid advertising, has been pivotal to our success. With over three years of experience, Abdelrahman has mastered deploying advertising campaigns across various platforms such as Facebook, Instagram, Snapchat, TikTok, and Google. His profound understanding of the digital landscape, combined with his strategic use of paid advertising, enables him to craft highly effective strategies for reaching and engaging target audiences.",
    "contact-member3-description2":
      "In addition to managing paid advertising campaigns, Abdelrahman is adept at planning comprehensive marketing strategies that encompass a broad spectrum of digital marketing tools and techniques. His ability to blend SEO knowledge with his advertising acumen ensures our clients' content achieves broad visibility and engagement. This holistic approach to digital marketing strategy planning and execution underpins the success of our campaigns, making them not only visible but also impactful.",
    "contact-member3-description3":
      "Abdelrahman’s leadership in marketing strategy planning and paid advertising initiatives drives outstanding results. As our CMO, he leads with creativity and strategic insight, focusing on maximizing paid advertising effectiveness while ensuring that our overall marketing strategies are coherent, innovative, and aligned with our clients' business objectives. Under his guidance, we deliver campaigns that exceed expectations, helping our clients excel in the digital realm.",
    "contact-member4-description1":
      "Meet Abdelrahman Mohamed, a key player in our sales team with over two years of experience. Renowned for his exceptional persuasion skills and client management abilities, Abdelrahman excels in tailoring solutions to meet diverse customer needs, ensuring satisfaction and fostering long-term relationships. His strategic approach and dedication to continuous learning significantly contribute to our sales growth and team development. Abdelrahman's impact extends beyond sales figures; he is instrumental in enhancing our brand's reputation and trust with clients. We're proud to have such a dynamic and forward-thinking individual like Abdelrahman on our team.",
    "contact-member5-description1":
      "Meet Fatma, the creative engine of our agency, whose expertise in advertising content creation sets her apart. With a keen focus on social media, she excels in delivering a wide array of content that includes persuasive copywriting, in-depth articles, visually compelling infographics, and engaging scriptwriting. Fatma's specialty lies in her ability to weave strategic advertising narratives, drawing upon her 2 years of dedicated experience in the field. Her work is not just about crafting messages; it's about creating conversations that resonate deeply with the target audience, driving engagement, and achieving measurable results. Fatma's approach combines creativity with analytical precision, making her an invaluable asset to our team and a driving force behind our most successful campaigns.",
    // Hire Page
    "hire-title": "Become a member of our team now !",
    "hire-description": "Fill the form below to join our team",
    "hire-input1": "Name",
    "hire-input2": "Date Of Birth ",
    "hire-input3": "Gender",
    "hire-input3-option1": "Male",
    "hire-input3-option2": "Female",
    "hire-input4": "Your Position",
    "hire-input5": "Years Of Experience",
    "hire-input5-option1": "Less Than 1 year",
    "hire-input5-option2": "1 year",
    "hire-input5-option3": "2 year",
    "hire-input5-option4": "3 year",
    "hire-input5-option5": "More than 3 years",
    "hire-input6": "Phone number",
    "hire-btn": "Send your data",
    // Footer
    "footer-title": "We do grant things together !",
    "footer-description":
      "If you want to speak to our expert team kindly reach us via email at: oiamediaofficial@gmail.com",
    "footer-btn1-text": "CONTACT THE TEAM",
    "footer-btn1-description": "Schedule a FREE call now",
    "footer-divider": "or",
    "footer-btn2-text": "GET HIRED",
    "footer-btn2-description": "Join our team now",
    "footer-number": "Company number",
    "footer-rights": "© All rights reserved.",
    dev: "This website was developed by :",
  },
  ar: {
    // Navbar
    "nav-title1": "قائمة",
    "nav-item1": "الصفحة الرئيسية",
    "nav-item2": "من نحن ؟",
    "nav-item3": "خدماتنا",
    "nav-item4": "تعرف علي الفريق",
    "nav-title2": "كن متواصل",
    "nav-item5": "تواصل معنا",
    "nav-item6": "قدم معنا",
    "nav-title3": "منصات التواصل الإجتماعي",
    "nav-item7": "",
    "nav-item8": "",
    "nav-item9": "",
    "nav-item10": "",
    "nav-item11": "",
    "nav-item12": "",
    // Hero Section
    "hero-title": "مرحبا بك في أويا",
    "hero-description1":
      "نحن هنا لنضمن تألق حضورك على الإنترنت وزيادة مبيعاتك. بفضل خبراتنا في استراتيجيات التسويق الإبداعية واستخدامنا لأحدث الأدوات، سنساعدك سواء كنت في بداية الطريق أو كنت من اللاعبين الكبار",
    "hero-description2":
      "نقدم حلولا مخصصة تجمع بين تعزيز الوجود على وسائل التواصل الاجتماعي والذكاء في محركات البحث لتحقيق نمو عملك وتحسين مبيعاتك، مع التركيز على الوصول للجمهور المناسب وتحقيق النجاح في السوق التنافسي",
    "hero-description3": "هيا لنصنع السحر معًا في أويا ميديا",
    "hero-btn-text": "تواصل مع الفريق",
    "hero-btn-description": "رتب استشارة مجانية الان",
    // About Section
    "about-title": "إجمالي الإيرادات التي تم توليدها للعملاء",
    "about-number": "١١٨ ألف دولار",
    "about-card1": "عدد العملاء السعداء",
    "about-card2": "إجمالي الإنفاق الإعلاني",
    "about-card3": "عدد المكاتب",
    "about-card4": "عدد الخدمات التي نقدمها",
    "about-text": "اويا ميديا",
    "about-description":
      "فلسفتنا بسيطة ولكنها قوية: نحن نؤمن بالقدرة التحويلية للتسويق الرقمي في تمكين الأعمال التجارية من جميع الأحجام نحن ملتزمون بتقديم التميز من خلال مزيج من الإبداع الابتكار، والاهتمام الحقيقي بنجاح عملائنا",
    "about-notice": "هل تحتاج إلى تعزيز لمبيعات شركتك؟",
    "about-btn-text": "تواصل مع الفريق",
    "about-btn-description": "رتب استشارة مجانية الان",
    // Features Section
    "features-title": "مهلًا انتظر ...",
    "features-description": "ماذا نقدم؟",
    "features-item": "التسويق الإلكتروني",
    "features-item-description1":
      "في أويا ميديا، نحن متخصصون في استراتيجيات التسويق الرقمي التي تعزز من ظهورك على الإنترنت وتزيد من مبيعاتك. تتضمن تخصصاتنا استخدام وسائل التواصل الاجتماعي بذكاء، تحسين بفعالية، والإعلانات (SEO) محركات البحث المدفوعة الاستراتيجية لمساعدة عملك على النمو في عالم الديجيتال",
    "features-item-description2":
      "ننظر إلى علاقتنا بك كشراكة، حيث نقوم بتخصيص مقارباتنا لتلبية احتياجاتك الفريدة. هذا يشمل تركيزا حادًا على الإعلانات المدفوعة، حيث نستهدف عملاءك المحتملين بدقة لضمان أن يحقق استثمارك أقصى عوائد",
    "features-item-description3":
      "ملتزمون بنجاحك، نهدف إلى تعزيز حضورك على الإنترنت وزيادة المبيعات من خلال مزيج من الاستراتيجيات العضوية والمدفوعة. دعونا نتعاون لجعل علامتك التجارية تبرز ولدفع المبيعات للأعلى من خلال التسويق الرقمي الفعّال نتحدث عن وما بين ذلك، (ROAS) العائد على الإنفاق الإعلاني وإذا لم نحقق لك مبيعات أكثر مما أنفقت * فستسترد أموالك، هذا وعد منا",
    "features-items-title": "كما نقدم الكثير غير ذلك",
    "features-items-description":
      "بالطبع، تحتاج مؤسستك إلى مظهر مذهل، لا داعي اللقلق بشأن ذلك، فالأمر متروك لنا",
    "features-card1": "الهوية البصرية",
    "features-card2": "تصميم الويب",
    "features-card3": "إنشاء المحتوى",
    "features-card4": "إدارة وسائل التواصل الاجتماعي",
    // Clients Section
    "clients-title": "أسماء كبيرة تثق فينا",
    "clients-description":
      "نتشرف بالعمل مع بعض من أكبر الأسماء في المجال الذين يثقوا بنا للارتقاء بوجودهم الالكتروني",
    // Team Section
    "team-title": "مرحبًا بكم في فريق النخبة",
    "team-description1":
      "انغمس في عالم حيث يلتقي الموهبة لا مثيل لها بخبرة لا تضاهى فريقنا هو جوهر وكالتنا، حيث يفخر بخبرة جماعية تصل إلى 10 سنوات عبر صناعات متنوعة. نحن مجموعة ديناميكية من الرؤى كل منا تم اختياره لمهاراته الفريدة وتفانيه في التميز",
    "team-description2":
      "يمنحنا هذا الطيف الواسع من المعرفة القدرة على تقديم حلول مبتكرة تعيد تعريف المعايير. سواء كان التسويق الرقمي استراتيجية الأعمال، أو التنفيذ الإبداعي، نحن في طليعة الصناعة، نضمن لعملائنا ليس فقط مواكبة الركب بل تصدره",
    "team-description3":
      "الشراكة معنا تعني الانضمام إلى قوى مع فريق مكرس النجاحك. نحن نمزج التعاون مع الأساليب المثبتة لتحويل التحديات إلى انتصارات",
    "team-description4": "تجربة مستقبل النجاح الرقمي مع فريق النخبة",
    // Contact Section
    "contact-title": "احجز مكالمة مجانية الان مع عمر",
    "contact-card-description":
      "بحلول نهاية هذا المكالمة التوضيحية، ستكون قد حصلت على فهم شامل للخطوات العملية التي يمكن لعملك تنفيذها لتحقيق نتائج ثابتة وموثوقة عبر الإنترنت من خلال التسويق الرقمي الاستراتيجي. سنستكشف استخدام القنوات الفعّالة والإعلان المدفوع، مزودين إياك بخارطة طريق واضحة لتعزيز استراتيجيات التسويق الرقمي الخاصة بك.",
    "contact-items-title": "من تناسب هذه المكالمة ؟",
    "contact-item1":
      "الشركات التي ترغب في تحويل موقعها الإلكتروني إلى قمع تحويل عالي باستخدام التسويق الرقمي",
    "contact-item2":
      "الشركات التقليدية المستعدة للانتقال إلى العالم الرقمي بإستراتيجيات تسويق رقمي فعالة",
    "contact-item3":
      "الشركات التي تهدف إلى زيادة الإيرادات من خلال قمع المبيعات وتحسين معدلات التحويل",
    "contact-item4":
      "الأشخاص الذين يتطلعون إلى تحسين معدلات التحويل وقيمة الطلب من خلال الإعلانات المدفوعة المستهدفة",
    "contact-item5":
      "الشركات التي تبحث عن وكالة موثوقة ذات خبرة في التسويق الرقمي والإعلان المدفوع",
    "contact-card-btn": "احجز مكالمة الان",
    // Opinions Section
    "opinion-title": "آراء العملاء",
    "opinion-card1": "خدمتهم رفعت مبيعاتنا. استثمار يستحق.",
    "opinion-card2": "استجابوا لاحتياجاتنا بسرعة. فريق متعاون جدًا.",
    "opinion-card3": "أبهرونا بأفكارهم الإبداعية. تسويق مختلف تمامًا.",
    "opinion-card4": "نتائج ملموسة وسريعة. تحسن واضح في الحضور الرقمي.",
    "opinion-card5": "أسعارهم عادلة مقابل الجودة. قيمة ممتازة للمال.",
    "opinion-card6":
      "تجاوزوا توقعاتنا بخدمتهم المخصصة. شعرنا بأننا في أيدٍ أمينة.",
    // Services Page
    "services-title": "اعرف المزيد عن خدماتنا",
    "services-item1": "التسويق الإلكتروني",
    "services-item2": "الهوية البصرية",
    "services-item3": "تصميم الويب",
    "services-item4": "صناعة المحتوي",
    "services-item5": "إدارة وسائل التواصل الاجتماعي",
    "services-item1-title": "التسويق الإلكتروني",
    "services-item1-description1":
      "في البيئة الرقمية المتطورة بسرعة، تلتزم وكالتنا بتوظيف نهج متعدد الجوانب لالتقاط انتباه جمهورك المستهدف بفعالية. في قلب استراتيجيتنا يكمن الإعلان المدفوع، أداة ديناميكية تقذف بعلامتك التجارية إلى دائرة الضوء وتضمن الظهور الفوري. من خلال وضع الإعلانات بشكل استراتيجي على محركات البحث ومنصات التواصل الاجتماعي، نستغل قوة حملات الدفع بالنقرة (PPC) لجذب حركة مرور مستهدفة إلى موقعك الإلكتروني، مقدمين نتائج قابلة للقياس وعائد استثمار كبير.",
    "services-item1-description2":
      "مكملًا للفورية التي يوفرها الإعلان المدفوع، تم تصميم نهجنا في التسويق بالمحتوى لبناء علاقات طويلة الأمد مع جمهورك. من خلال إنشاء وتوزيع محتوى قيم وذي صلة وجذاب، نحن لا نجذب ونحتفظ بجمهور محدد فقط، بل نؤسس أيضًا لعلامتك التجارية كقائد فكري في صناعتك. من المقالات الإعلامية إلى الفيديوهات المقنعة والإنفوجرافيك، تغذي استراتيجيتنا للتسويق بالمحتوى اتصالًا بجمهورك يتجاوز المعاملات، معززًا الثقة والولاء.",
    "services-item1-description3":
      "بالتوازي مع هذه الجهود، توفر تقنيات التسويق البارد منهجية استباقية للوصول، تتيح لنا استكشاف أسواق جديدة وجذب العملاء المحتملين الذين قد لا يكونوا على دراية بعلامتك التجارية بعد. من خلال صياغة رسائل مخصصة واستخدام حملات البريد الإلكتروني المستهدفة، نقدم عملك إلى جمهور أوسع، ممهدًا الطريق لفرص جديدة والنمو. يضمن هذا الوصول الاستراتيجي أن تصنع علامتك التجارية انطباعًا أوليًا لا يُنسى، مما يمهد الطريق للتفاعلات المستقبلية.",
    "services-item1-description4":
      "لتعزيز نطاق جهود التسويق بالمحتوى والتسويق البارد، يلعب خبرتنا في التسويق عبر محركات البحث (SEM) دورًا حاسمًا في تعزيز ظهورك على الإنترنت. من خلال الجمع بين قوة تحسين محركات البحث (SEO) والإعلان المدفوع ضمن إطار SEM، نضمن لعلامتك التجارية الحصول على مكانة بارزة في صفحات نتائج محركات البحث. هذا النهج المزدوج لا يزيد من الظهور الفوري من خلال الإعلانات فقط، بل يبني أيضًا وجودًا على الإنترنت مستدامًا يستمر في جذب حركة المرور العضوية بمرور الوقت.",
    "services-item1-description5":
      "وأخيرًا، في صميم استراتيجيتنا للتسويق الرقمي تكمن قوة الإعلان المدفوع. هذه الطريقة تقدم الفورية والدقة الأساسية لعرض علامتك التجارية أمام الجمهور المثالي في اللحظات الأكثر أهمية. باستخدام منصات متقدمة مثل إعلانات جوجل وإعلانات فيسبوك وإعلانات تيك توك وإعلانات سناب شات وإعلانات إكس، نقوم بتصميم حملات مستهدفة بدقة تتوافق مع جمهورك، مضمونة لتحقيق نتائج مؤثرة. نهجنا يستند إلى فهم عميق لسلوكيات واحتياجات سوقك المستهدف، مما يمكّننا من إنشاء إعلانات تجذب وتشجع على التفاعل بفعالية.",
    "services-item1-description6":
      "يوفر الإعلان المدفوع، بتكامله مع استراتيجيات التسويق الأخرى، مسارًا قويًا لتحقيق النجاح في السوق الرقمي المعاصر. من خلال الجمع بين الأدوات والتكتيكات المتنوعة، نضمن أن تحظى علامتك التجارية بالتواجد والتأثير اللازمين لتحقيق أهدافها وتجاوزها.",
    "services-item2-title": "الهوية البصرية",
    "services-item2-description1":
      "في شركتنا، نؤمن بأن قوة العلامة التجارية هي الأساس لأي قصة نجاح في السوق الحديث. من خلال فهمنا العميق للتحديات والفرص في العالم الرقمي، نقدم حلولاً متكاملة لتصميم العلامات التجارية التي تعزز قيمة علامتك وتميزها في سوق تنافسي.",
    "services-item2-description2":
      "نحن نتخصص في تطوير هويات علامات تجارية فريدة توطد الثقة وتبني تواصلاً عاطفياً مع الجمهور. من خلال عملية تحليلية ومبتكرة، نسعى لفهم رؤيتك وأهدافك لنقدم تجربة علامة تجارية لا تُنسى تعبر عن قيم شركتك وتؤكد على مبادئها الأساسية.",
    "services-item2-description3":
      "من تحليل العلامة التجارية، حيث ندرس السوق والمنافسين لضمان تميز علامتك، إلى تطوير استراتيجيات علامات تجارية توجه تواصلك وتحدد رسالتك الأساسية وقيمك. نبتكر هويات بصرية جذابة تحكي قصتك بشكل فعال وتعبر عن جوهر علامتك التجارية، مع التأكيد على تجربة العلامة التجارية في كل نقطة تلامس مع العملاء لضمان الاتساق والتماسك.",
    "services-item2-description4":
      "مع شركتنا، علامتك التجارية ليست مجرد رمز لمنتجاتك أو خدماتك، بل هي قصة حية تنمو وتتطور مع كل تفاعل، مما يضمن تجربة ماركة فريدة ومتكاملة تعكس حقًا روح شركتك وتطلعاتها",
    "services-item2-description5": "",
    "services-item2-description6": "",
    "services-item3-title": "تصميم الويب",
    "services-item3-description1":
      "في شركتنا، نعتبر تصميم وتطوير المواقع الإلكترونية عناصر أساسية في استراتيجية العلامة التجارية الرقمية الخاصة بك. موقعك الإلكتروني هو جزء رئيسي من هوية علامتك التجارية، حيث يعمل كالمنصة الأولية التي تتصل فيها قصة علامتك بجمهورك.",
    "services-item3-description2":
      "نحن خبراء في صناعة مواقع ويب مخصصة تعكس قيم وأهداف علامتك التجارية، مع التأكيد على أن تكون جذابة بصريًا، سهلة الاستخدام، ومُحسنة لمحركات البحث. هذا النهج يضمن تجربة سلسة لزوارك عبر جميع الأجهزة، مما يعزز من ظهور علامتك التجارية وتفاعلها عبر الإنترنت.",
    "services-item3-description3":
      "فريقنا يستخدم أحدث التقنيات لإنشاء مواقع ويب سريعة، آمنة، وقابلة للتوسع، لتلبية جميع احتياجاتك، سواء كانت موقعًا للتجارة الإلكترونية، موقعًا تجاريًا، أو مدونة شخصية. نحن ندرك أهمية موقعك الإلكتروني في تكوين الانطباع الأول، ولذلك نركز على تقديم تجارب غامرة لا تعرض علامتك التجارية فحسب، بل تحفز أيضًا على تحويل الزوار.",
    "services-item3-description4":
      "كل جانب في موقعك الإلكتروني، من وضع الدعوات إلى العمل بشكل استراتيجي إلى المحتوى الذي يتحدث بصوت علامتك التجارية، مصمم ليكمل استراتيجية علامتك التجارية الشاملة. هدفنا هو ضمان تميز موقعك الإلكتروني، وبناء قيمة لعلامتك التجارية، ودعم نمو أعمالك.",
    "services-item3-description5":
      "دعنا نساعدك في إنشاء موقع ويب يمثل علامتك التجارية حقًا ويجذب جمهورك في العالم الرقمي.",
    "services-item3-description6": "",
    "services-item4-title": "صناعة المحتوي",
    "services-item4-description1":
      "في شركتنا، نعتبر خلق المحتوى حجر الأساس في بناء وتعزيز العلامة التجارية في العصر الرقمي. نحن نفهم أن المحتوى الجذاب والمعبر هو ما يميز علامتك التجارية ويجعلها قادرة على بناء علاقة مع الجمهور وتحقيق التفاعل.",
    "services-item4-description2":
      "نحن نتخصص في إنشاء محتوى مخصص يتردد صداه مع جمهورك المستهدف، ويعكس قيم علامتك التجارية ويروي قصتها بطريقة مؤثرة. من المحتوى النصي إلى الصور والفيديوهات، نحرص على أن يكون كل قطعة محتوى ننتجها ذات جودة عالية ومصممة لتحقيق أهداف علامتك التجارية.",
    "services-item4-description3":
      "عبر استراتيجيات المحتوى المدروسة، نساعد علامتك التجارية على تحسين الوجود على الإنترنت وزيادة الوعي بالعلامة. نقدم حلولاً مبتكرة لتوزيع المحتوى تضمن وصوله إلى الجمهور المناسب في الوقت المناسب، مما يعزز من فرص التفاعل والتحويل.",
    "services-item4-description4":
      "في شركتنا، نعمل كشركاء إستراتيجيين لعلامتك التجارية، موجهين كل جهودنا لضمان أن يعكس المحتوى الذي نخلقه قيمك ويدعم أهدافك. نحن نؤمن بأن المحتوى الفعال هو ذلك الذي يمكنه ليس فقط جذب الانتباه ولكن أيضاً إلهام الجمهور ودفعهم للتفاعل.",
    "services-item4-description5":
      "دعونا نكون شريكك في رحلة خلق محتوى مؤثر يبرز علامتك التجارية وينمي علاقتها مع جمهورها.",
    "services-item4-description6": "",
    "services-item5-title": "إدارة وسائل التواصل الاجتماعي",
    "services-item5-description1":
      "في شركتنا، نتبنى نهجًا شاملاً ومتخصصًا في إدارة وسائل التواصل الاجتماعي يتجاوز التفاعل البسيط مع المحتوى. نحن نفهم أن مفتاح تعزيز علامتك التجارية يكمن في التفاعل الفعال والتواصل المستمر مع جمهورك. لذلك، نقدم خدمات إدارة وسائل التواصل الاجتماعي التي تركز على الاستجابة لاحتياجات جمهورك والتواصل معهم بطريقة تعكس قيم ورسالة علامتك التجارية.",
    "services-item5-description2":
      "التفاعل مع الجمهور: نعتبر التفاعل مع الجمهور جزءًا حيويًا من استراتيجية العلامة التجارية. لذلك، ندير التفاعلات بنشاط، من الرد على التعليقات والرسائل الخاصة إلى المشاركة في المحادثات ذات الصلة، لبناء علاقة متينة مع جمهورك.",
    "services-item5-description3":
      "الاستجابة للاستفسارات: نضمن توفير ردود سريعة ومفصلة على جميع استفسارات جمهورك، مما يعزز ثقتهم بعلامتك التجارية ويعكس التزامك بخدمة العملاء.",
    "services-item5-description4":
      "مراقبة التعليقات والاستجابة للأزمات: نقوم بمراقبة التعليقات والمحادثات عن كثب للتعامل بفعالية مع أي ملاحظات سلبية أو أزمات محتملة، مما يحمي سمعة علامتك التجارية.",
    "services-item5-description5":
      "تحليل الأداء والتقارير: نوفر تحليلات دورية تظهر أداء علامتك التجارية على وسائل التواصل الاجتماعي، مما يمكننا من تعديل الاستراتيجيات وفقًا للتوجهات وتفضيلات جمهورك.",
    "services-item5-description6":
      "نحن في شركتنا، نتعامل مع وسائل التواصل الاجتماعي كأداة حيوية لبناء وتعزيز علاقتك بجمهورك. من خلال إدارة وسائل التواصل الاجتماعي بشكل استراتيجي وفعال، نضمن أن تكون علامتك التجارية دائمًا في قلب الحوار، مما يعزز مكانتها في السوق ويساهم في نمو أعمالك.",
    // Contact Page
    "contact-title": "تواصل معنا خلال ",
    "contact-whatsapp": "الواتس اب",
    "contact-whatsapp-description":
      "أسهل طريقة للوصول إلى الفريق وتحديد موعد للاجتماع",
    "contact-form-notice": "( ترشيحنا لي حجز اجتماع أكثر احترافية )",
    "contact-form-title": "هل تخبرنا المزيد عنك ؟",
    "contact-form-description": "باختصار، قدم نفسك من خلال تلك الحقول التالية",
    "contact-field1-title": "بيانات شخصية",
    "contact-field1-input1": "الاسم",
    "contact-field1-input2": "رقم الهاتف",
    "contact-field1-input3": "البريد الإلكتروني",
    "contact-field1-input4": "اسم المستخدم انستغرام ( إختياري )",
    "contact-field2-title": "بيانات الشركة / المؤسسة",
    "contact-field2-input1": "اسم الشركة",
    "contact-field2-input2": "عدد الموظفين",
    "contact-field2-input2-option1": "2 - 5",
    "contact-field2-input2-option2": "5 - 10",
    "contact-field2-input2-option3": "10 - 50",
    "contact-field2-input2-option4": "50 - 100",
    "contact-field2-input3": "تخصص الشركة",
    "contact-field2-input4": "اخر المبيعات",
    "contact-field2-input4-option1": "أقل من $5K",
    "contact-field2-input4-option2": "$5K - $10K",
    "contact-field2-input4-option3": "$10K - $50K",
    "contact-field2-input4-option4": "أكثر من $50K",
    "contact-field2-input5": "اختر الدولة",
    "contact-field2-input6": "رابط موقع الشركة ( إختياري )",
    "contact-field2-input7": "اسم المستخدم انستغرام ( إختياري )",
    "contact-field2-input8": "هل الشركة مسجلة ؟",
    "contact-field2-input8-option1": "لا",
    "contact-field2-input8-option2": "نعم",
    "contact-checkbox-title": "اختر الخدمات التي تبحث عنها !",
    "contact-checkbox-description": "يمكنك اختيار أكثر من خدمة",
    "contact-date-title": "اختر التاريخ الذي ترغب في اللقاء فيه",
    "contact-date-description": "أدخل تاريخ بناءً على الجدول الزمني الخاص بك",
    "contact-form-btn": "تأكيد حجز المقابلة",
    "contact-team-title": "هل تريد معرفة المزيد عن فريقنا !",
    "contact-member1-description1":
      "تعرفوا على عمر يحيى، القوة الاستراتيجية والروح المؤسسة لوكالتنا. كرئيس تنفيذي ومؤسس، يُجسد عمر جوهر القيادة البصيرة، مدعومًا بأكثر من 3 سنوات من الخبرة الغنية في إدارة الأعمال وإتقان تعقيدات التسويق الرقمي. مسيرته مميزة بمحفظة متنوعة، حيث تنقل عبر صناعات مختلفة وقاد العملاء الكبار نحو أهدافهم الاستراتيجية بسلاسة وكفاءة لا مثيل لها.",
    "contact-member1-description2":
      "تُعرف قيادة عمر بقدرته على توقع اتجاهات السوق وتكييف الاستراتيجيات التي لا تلبي الاحتياجات فحسب، بل تتجاوز التطور المستمر للمشهد التسويقي الرقمي. خبرته ليست فقط في قيادة فريقنا؛ بل في تنمية بيئة يزدهر فيها الابتكار، وتكون رضا العميل في قمة الأولويات. نهج عمر في الإدارة والتسويق الرقمي شامل، مضمونًا أن وكالتنا لا تتوقع احتياجات عملائنا فحسب، بل تقدم أيضًا حلولًا متقدمة تحقق نجاحًا قابلًا للقياس.",
    "contact-member1-description3":
      "تحت إشراف عمر، أصبحت وكالتنا مرادفة للتميز، مدفوعةً حدود ما هو ممكن في التسويق الرقمي وإدارة الأعمال. إخلاصه لنمو عملائنا والتزامه بتطوير فريقنا هو ما يجعل عمر يحيى ليس فقط رئيسنا التنفيذي ومؤسسنا ولكن مهندس نجاحنا الأول.",
    "contact-member2-description1":
      "يُعرّف بمصطفى، مديرنا الإبداعي الموقر، الذي رفع بقيادته الرؤيوية وخبرته التي تزيد عن خمس سنوات في مجال الإعلان الإبداعي، مستوى محفظة وكالتنا بشكل كبير. متخصص في هوية العلامة التجارية، تصميم الشعارات، تصاميم وسائل التواصل الاجتماعي، إنشاء المحتوى، وتصميم واجهة المستخدم/تجربة المستخدم للمواقع الإلكترونية، لقد كانت مجموعة مهارات مصطفى الواسعة ونهجه الابتكاري حاسمين في تحويل العلامات التجارية وصياغة تجارب رقمية لا تُنسى.",
    "contact-member2-description2":
      "يجمع مصطفى بين الذوق الإبداعي والفهم الاستراتيجي، مؤكدًا أن كل مشروع لا يبدو رائعًا فحسب، بل يتماشى أيضًا بشكل مثالي مع أهداف عملائنا. يتميز عمله بفهم عميق لأحدث اتجاهات التصميم والتكنولوجيا، التي يدمجها بسلاسة في المشاريع لإنتاج نتائج جذابة وفعالة.",
    "contact-member2-description3":
      "تحت إرشاده، ازدهر فريقنا الإبداعي، مُنتجًا أعمالاً تبرز بسبب إبداعها وتأثيرها. إن التزام مصطفى بالتميز وقدرته على التنبؤ والتكيف مع المشهد الرقمي المتطور باستمرار يجعلانه عنصرًا أساسيًا في وكالتنا والعلامات التجارية التي نخدمها.",
    "contact-member3-description1":
      "تعرفوا على عبد الرحمن سمير، ضابطنا الأعلى للتسويق، الذي كانت خبرته في التسويق الرقمي، وخاصة في الإعلانات المدفوعة، حاسمة في نجاحنا. بخبرة تزيد عن ثلاث سنوات، أتقن عبد الرحمن فن نشر حملات إعلانية عبر منصات متعددة مثل فيسبوك، إنستغرام، سناب شات، تيك توك، وجوجل. فهمه العميق للمشهد الرقمي، مقترنًا باستخدامه الاستراتيجي للإعلانات المدفوعة، يمكنه من صياغة استراتيجيات فعالة للغاية للوصول إلى الجمهور المستهدف وإشراكهم.",
    "contact-member3-description2":
      "يتميز عبد الرحمن ببراعته في إدارة حملات الإعلانات المدفوعة، محسنًا أداء الإعلان لضمان الحصول على أقصى عائد من الاستثمار بينما يضمن معرفته بممارسات SEO أن محتوى عملائنا يحقق رؤية واسعة. قيادته لمبادرات الإعلانات المدفوعة تقود إلى نتائج ممتازة، مما يجعل حملاتنا لها تأثير قوي.",
    "contact-member3-description3":
      "كضابطنا الأعلى للتسويق، يقود عبد الرحمن بإبداع ورؤية استراتيجية، مع التركيز على تعظيم فعالية الإعلانات المدفوعة. تحت إرشاده، نقدم حملات تتجاوز التوقعات، مساعدين عملائنا على التميز في العالم الرقمي.",
    "contact-member4-description1":
      "تعرف على عبد الرحمن محمد، عضو أساسي في فريق المبيعات لدينا ولديه أكثر من سنتين من الخبرة. يشتهر عبد الرحمن بمهاراته الاستثنائية في الإقناع وإدارة العملاء، حيث يتميز في تقديم حلول مخصصة تلبي احتياجات العملاء المتنوعة، مضموناً الرضا وبناء علاقات طويلة الأمد. نهجه الاستراتيجي وتفانيه في التعلم المستمر يسهمان بشكل كبير في نمو مبيعاتنا وتطوير فريقنا. تأثير عبد الرحمن يتجاوز الأرقام؛ فهو يلعب دورًا حاسمًا في تعزيز سمعة علامتنا التجارية وثقة العملاء. نحن فخورون بوجود شخص ديناميكي وذو تفكير مستقبلي مثل عبد الرحمن في فريقنا.",
    "contact-member5-description1":
      "تعرفوا على فاطمة، المحرك الإبداعي لوكالتنا، حيث تبرز خبرتها في إنشاء المحتوى الإعلاني. مع تركيز حاد على وسائل التواصل الاجتماعي، تتميز بتقديم مجموعة واسعة من المحتوى الذي يشمل كتابة النصوص الإعلانية الجذابة، المقالات المعمقة، الإنفوجرافيكس البصرياً الجاذب، وكتابة السيناريوهات المشوقة. تكمن تخصصية فاطمة في قدرتها على نسج الروايات الإعلانية الاستراتيجية، معتمدةً على خبرتها التي تمتد لعامين مكرسة في هذا المجال. عملها ليس مجرد صياغة رسائل؛ بل هو عن خلق حوارات ت resonate مع الجمهور المستهدف، دافعةً للتفاعل وتحقيق نتائج قابلة للقياس. تجمع فاطمة بين الإبداع والدقة التحليلية في منهجها، مما يجعلها أصلًا لا يُقدر بثمن لفريقنا وقوة دافعة وراء أنجح حملاتنا.",
    // Hire Page
    "hire-title": "هل تريد أن تصبح عضو من الفريق الخاص بنا ؟",
    "hire-description": "قم بملئ البيانات للإنضمام لدينا",
    "hire-input1": "الاسم",
    "hire-input2": "تاريخ الميلاد",
    "hire-input3": "الجنس",
    "hire-input3-option1": "ذكر",
    "hire-input3-option2": "انثى",
    "hire-input4": "التخصص",
    "hire-input5": "عدد سنين الخبرة",
    "hire-input5-option1": "اقل من سنة واحدة",
    "hire-input5-option2": "سنة واحدة",
    "hire-input5-option3": "سنتان",
    "hire-input5-option4": "ثلاث سنوات",
    "hire-input5-option5": "أكثر من ثلاث سنوات",
    "hire-input6": "رقم الهاتف",
    "hire-btn": "أنضم الان",
    // Footer
    "footer-title": "لنفعل الكثير سويا",
    "footer-description":
      "إذا أردت التحدث مع فريقنا يمكنك التواصل معنا عبر الايميل : oiamediaofficial@gmail.com",
    "footer-btn1-text": "تواصل مع الفريق",
    "footer-btn1-description": "رتب استشارة مجانية الان",
    "footer-divider": "أو",
    "footer-btn2-text": "احصل علي وظيفة",
    "footer-btn2-description": "انضم الينا الان",
    "footer-number": "رقم الشركة ",
    "footer-rights": "© جميع الحقوق محمية ومحفوظة",
    dev: "تم تطوير هذا الموقع بواسطة :",
  },
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[lang][key];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

// Scroll UP
let scroll_up = document.getElementById("scroll-up");

scroll_up.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll_up.style.opacity = 1;
  } else {
    scroll_up.style.opacity = 0;
  }
}
window.addEventListener("scroll", scrollFunction);

// Scroll Indicator
function scrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
window.addEventListener("scroll", scrollIndicator);

// Prevent Inspector Tools

// - Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, "I") ||
    ctrlShiftKey(e, "J") ||
    ctrlShiftKey(e, "C") ||
    (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  )
    return false;
};
