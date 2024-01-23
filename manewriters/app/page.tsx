import Content from '@/components/HeroSection/Content'
import HeroSection from '@/components/HeroSection/HeroSection'
import { ServicesScrollArea } from '@/components/HeroSection/ListServices'
import Sample from '@/components/HeroSection/SampleWork/Sample'
import Footer from '@/components/Layout/Footer'
import NavBar from '@/components/Layout/NavBar'
import MakeOrder from '@/components/MakeOrder/MakeOrder'
import { CarouselSpacing } from '@/components/Services/CarouselServices'
import { Payment } from '@/components/Services/Payment'
import Services from '@/components/Services/Services'
import Servicetab from '@/components/Services/Servicetab'
import Theme from '@/components/theme'
import Image from 'next/image'
import { FaCcPaypal, FaInstagram } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'


const services = ['Discussion Posts and Responses', 'Essays (any type)', 'Homework Assignment (any type)', 'PowerPoint Presentation with speaker notes', 'Reaction Paper', 'Reflective Writing', 'Presentation or Speech', 'Personal Narrative', 'Creative Writing', 'Critical Thinking/Review', 'Article Writing/Review', 'Book/Movie Review', 'SWOT Analysis', 'Case Study', 'Business Plan', 'Business Proposal', 'Annotated Bibliography', 'Research Proposal', 'Research Paper', 'Capstone Project', 'Admission Essay']

const newJson = [
  {
    "name": "Non-technical",
    "assignments": [
      {
        "type": "Discussion Posts and Responses",
        "description": "Engage in online discussions and respond to classmates' posts on a given topic."
      },
      {
        "type": "Essays",
        "description": "Compose essays of various types, such as narrative, expository, persuasive, or descriptive."
      },
      {
        "type": "Homework Assignment",
        "description": "Complete assigned tasks or problems to reinforce learning outside of class."
      },
      {
        "type": "PowerPoint Presentation with speaker notes",
        "description": "Create a presentation using PowerPoint slides with accompanying speaker notes."
      },
      {
        "type": "Reaction Paper",
        "description": "Provide a personal response and analysis to a particular reading, event, or experience."
      },
      {
        "type": "Reflective Writing",
        "description": "Share personal thoughts and reflections on a specific topic or experience."
      },
      {
        "type": "Presentation or Speech",
        "description": "Prepare and deliver an oral presentation or speech on a given subject."
      },
      {
        "type": "Personal Narrative",
        "description": "Write a story that recounts a personal experience or event."
      },
      {
        "type": "Creative Writing",
        "description": "Express imaginative and original ideas through various creative writing forms."
      },
      {
        "type": "Critical Thinking/Review",
        "description": "Evaluate and analyze a piece of work, providing a critical review."
      },
      {
        "type": "Article Writing/Review",
        "description": "Compose an article or review analyzing and commenting on a specific topic."
      },
      {
        "type": "Book/Movie Review",
        "description": "Critique and review a book or movie, discussing its strengths and weaknesses."
      },
      {
        "type": "SWOT Analysis",
        "description": "Conduct a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for a given entity."
      },
      {
        "type": "Case Study",
        "description": "Examine and analyze a real or hypothetical case to draw conclusions and recommendations."
      },
      {
        "type": "Business Plan",
        "description": "Develop a comprehensive business plan outlining strategies and goals for a business."
      },
      {
        "type": "Business Proposal",
        "description": "Create a proposal for a business idea or project, detailing its feasibility and benefits."
      },
      {
        "type": "Annotated Bibliography",
        "description": "Compile a list of sources with brief annotations for each, summarizing their relevance."
      },
      {
        "type": "Research Proposal",
        "description": "Propose a research project, outlining its objectives, methodology, and expected outcomes."
      },
      {
        "type": "Research Paper",
        "description": "Conduct in-depth research on a specific topic and present findings in a formal paper."
      },
      {
        "type": "Capstone Project",
        "description": "Complete a culminating project integrating knowledge and skills from a course or program."
      },
      {
        "type": "Admission Essay",
        "description": "Write an essay as part of a college or program application, highlighting personal achievements and goals."
      }
    ]
  },
  {
    "name": "Programming",
    "assignments": [
      {
        "type": "HTML",
        "description": "Create and structure web pages using HTML (Hypertext Markup Language). HTML is the foundation of web development, providing the essential structure for content on the internet. By mastering HTML, developers can ensure well-organized and accessible web pages for users across various devices and platforms."
      },
      {
        "type": "CSS",
        "description": "Style and design web pages using CSS (Cascading Style Sheets). CSS empowers developers to enhance the visual appeal of websites, controlling layout, colors, and typography. With CSS, you can create responsive and attractive user interfaces, making a positive impact on the overall user experience."
      },
      {
        "type": "JavaScript",
        "description": "Develop dynamic and interactive web pages using JavaScript. JavaScript is a versatile scripting language that enables the creation of engaging user interfaces and responsive web applications. By leveraging JavaScript, developers can implement client-side functionalities, enhancing the overall interactivity and user engagement on the web."
      },
      {
        "type": "NodeJS",
        "description": "Build server-side applications using Node.js runtime. Node.js enables developers to use JavaScript for server-side programming, allowing for the development of scalable and high-performance applications. With Node.js, you can create efficient and real-time server applications that respond seamlessly to user requests."
      },
      {
        "type": "Python",
        "description": "Write programs and applications using the Python programming language. Python is a versatile and powerful language known for its simplicity and readability. Whether you're developing software, automating tasks, or working on data science projects, Python provides a robust foundation for a wide range of applications."
      },
      {
        "type": "Django",
        "description": "Develop web applications using the Django web framework for Python. Django simplifies the process of building robust and scalable web applications in Python. With features like an ORM, authentication, and built-in admin interface, Django accelerates development, allowing developers to focus on creating feature-rich and secure web applications."
      },
      {
        "type": "Ruby",
        "description": "Write scripts and applications using the Ruby programming language. Ruby's elegant syntax and object-oriented approach make it a joy to work with for both beginners and experienced developers. Whether you're building web applications with Ruby on Rails or creating scripts for automation, Ruby offers a dynamic and expressive programming experience."
      },
      {
        "type": "Java",
        "description": "Create Java applications for various platforms. Java is a versatile and widely used programming language known for its portability and performance. With Java, developers can build everything from desktop applications to mobile apps and enterprise-level systems, making it a robust choice for diverse software development projects."
      },
      {
        "type": "PHP",
        "description": "Develop server-side web applications using PHP. PHP is a server-side scripting language designed for web development. It powers a significant portion of the internet, allowing developers to create dynamic and interactive web pages. With PHP, you can build feature-rich websites and web applications that cater to diverse user needs."
      },
      {
        "type": "SQL",
        "description": "Write queries and manage databases using SQL (Structured Query Language). SQL is a fundamental language for managing and manipulating relational databases. Developers use SQL to retrieve, insert, update, and delete data, ensuring efficient and organized data management in applications. Proficiency in SQL is essential for building robust and scalable database-driven applications."
      }
    ]
  },
  {
    "name": "Data Analysis",
    "assignments": [
      {
        "type": "Excel",
        "description": "Perform data analysis and visualization using Microsoft Excel."
      },
      {
        "type": "R",
        "description": "Statistical programming and analysis using the R programming language."
      },
      {
        "type": "SPSS",
        "description": "Conduct statistical analysis using IBM SPSS (Statistical Package for the Social Sciences)."
      }
    ]
  }
]

const sampleWork = [
  {
    "id": 1,
    "serviceName": "Discussion Posts and Responses",
    "image": "/images/Discussion Post.jpg",
    "description": "Get your Discussion Posts written and Responses made to other peers' posts immediately as they are posted.",
    "category": "Non-technical"
  },
  {
    "id": 2,
    "serviceName": "Essays (any type)",
    "image": "/images/Essays.jpg",
    "description": "Place an order for Topnotch Essays: Argumentative Essays, Persuasive Essays, Narrative Essays, Descriptive Essays, Expository Essays, Definition Essays, Process Essays, and Compare and Contrast Essays.",
    "category": "Non-technical"
  },
  {
    "id": 3,
    "serviceName": "Homework Assignment (any type)",
    "image": "/images/Homework Assignment.jpg",
    "description": "If you are working and don't have enough time for your Homework Assignment, you might need to click that 'Make order' button for a little help before the deadline.",
    "category": "Non-technical"
  },
  {
    "id": 4,
    "serviceName": "Canva/PowerPoint Presentation with Speaker Notes",
    "image": "/images/PowerPoint and Canva.jpg",
    "description": "If you have to do a presentation on a topic you have been working on, you need to create amazing slides with visuals on PowerPoint or Canva. Why don't you let Essayprof help you do that?",
    "category": "Non-technical"
  },
  {
    "id": 5,
    "serviceName": "Reaction Paper",
    "image": "/images/Reaction Paper.jpg",
    "description": "A Reaction Paper is one of the best pieces since it gives one a chance to give one's opinion regarding a particular topic. Essayprof can't wait to help with such.",
    "category": "Non-technical"
  },
  {
    "id": 6,
    "serviceName": "Reflective Writing",
    "image": "/images/Reflective Writing.jpg",
    "description": "Sometimes, a module can be so boring that trying to remember what you learned and reflect on it becomes even more boring. With the module name and course materials, Essayprof can create time just to help you write the best Reflection.",
    "category": "Non-technical"
  },
  {
    "id": 7,
    "serviceName": "Presentation or Speech",
    "image": "/images/Speech Writing.jpg",
    "description": "Don't worry about that Speech assignment anymore. What is your topic and audience?",
    "category": "Non-technical"
  },
  {
    "id": 8,
    "serviceName": "Personal Narrative",
    "image": "/images/Personal Narrative Writing.jpg",
    "description": "Your ideas and experiences will help Essayprof write you a high-quality and original Personal Review; consider giving it a try.",
    "category": "Non-technical"
  },
  {
    "id": 9,
    "serviceName": "Creative Writing",
    "image": "/images/Creative Writing.jpg",
    "description": "What is your interesting Creative Topic? Essayprof got you.",
    "category": "Non-technical"
  },
  {
    "id": 10,
    "serviceName": "Critical Writing/Review",
    "image": "/images/Critical Writing.jpg",
    "description": "Essayprof will make sure all your Critical Writing instructions are followed keenly.",
    "category": "Non-technical"
  },
  {
    "id": 11,
    "serviceName": "Article Writing/Review",
    "image": "/images/Article Writing.jpg",
    "description": "For an Article Review, you need to say which article or provide one alongside a few instructions, if any, and then leave Essayprof into it. Essayprof can help you make an informed choice if you haven’t picked any article yet.",
    "category": "Non-technical"
  },
  {
    "id": 12,
    "serviceName": "Book/Movie Review",
    "image": "/images/Book and Movie Review.jpg",
    "description": "Which Movie or Book do you want a detailed review of?",
    "category": "Non-technical"
  },
  {
    "id": 13,
    "serviceName": "SWOT Analysis",
    "image": "/images/SWOT Analysis.jpg",
    "description": "Just mention your selected company or organization and let Essayprof write a SWOT Analysis for you.",
    "category": "Non-technical"
  },
  {
    "id": 14,
    "serviceName": "Case Study",
    "image": "/images/Case Study.jpg",
    "description": "Which case study do you want Essayprof to delve into and provide accurate answers?",
    "category": "Non-technical"
  },
  {
    "id": 15,
    "serviceName": "Business Plan",
    "image": "/images/Business Plan.jpg",
    "description": "Essayprof will make your stress for the Business Plan assignment disappear once you place an order.",
    "category": "Non-technical"
  },
  {
    "id": 16,
    "serviceName": "Business Proposal",
    "image": "/images/Business Proposal.jpg",
    "description": "All your business-related assignments can cease giving you a headache once you hire Essayprof.",
    "category": "Non-technical"
  },
  {
    "id": 17,
    "serviceName": "Annotated Bibliography",
    "image": "/images/",
    "description": "Essayprof will help you locate relevant sources for your Annotated Bibliography or work with yours if you have some.",
    "category": "Non-technical"
  },
  {
    "id": 18,
    "serviceName": "Research Proposal",
    "image": "/images/Research Proposal.jpg",
    "description": "Essayprof guarantees you a high-quality Research Proposal with all the requirements met.",
    "category": "Non-technical"
  },
  {
    "id": 19,
    "serviceName": "Research Paper",
    "image": "/images/Research Paper.jpg",
    "description": "Get your research paper done from scratch with credible and reliable sources and without plagiarism.",
    "category": "Non-technical"
  },
  {
    "id": 20,
    "serviceName": "Capstone Project",
    "image": "/images/Capstone Project.jpg",
    "description": "Worried about the approaching deadline for your Capstone Project? Just make an order and wait for a few hours.",
    "category": "Non-technical"
  },
  {
    "id": 21,
    "serviceName": "Admission Essay",
    "image": "/images/Admission Essay.jpg",
    "description": "Do you want to join your dream university? Essayprof will help you write a top-notch Admission Essay that makes you a priority.",
    "category": "Non-technical"
  },
  {
    "id": 22,
    "serviceName": "HTML and CSS",
    "image": "/images/CSS and HTML.jpg",
    "description": "Elevate your web development projects with HTML and CSS expertise from Essayprof. Our coding services ensure clean and semantic markup (HTML) combined with stylish and responsive styling (CSS). From basic web pages to complex layouts, trust us to deliver code that meets modern web standards.",
    "category": "Programming"
  },
  {
    "id": 23,
    "serviceName": "JavaScript (React)",
    "image": "/images/JavaScript.jpg",
    "description": "Leverage the power of JavaScript and React for dynamic and interactive web applications. Essayprof offers proficient coding services in JavaScript, crafting React components for seamless user experiences. Enhance your web development projects with our expertise in front-end technologies.",
    "category": "Programming"
  },
  {
    "id": 24,
    "serviceName": "Python (Django)",
    "image": "/images/Python.jpg",
    "description": "Harness the capabilities of Python and Django for robust web application development. Essayprof excels in writing clean and efficient Python code, coupled with the Django framework for scalable and secure web solutions. Trust us to bring your Python (Django) projects to life with expertise and precision.",
    "category": "Programming"
  },
  {
    "id": 25,
    "serviceName": "Ruby",
    "image": "/images/Ruby.jpg",
    "description": "Explore the dynamic world of Ruby programming with Essayprof's coding services. Whether you're developing scripts or web applications, our Ruby expertise ensures elegant and efficient code. Embrace the simplicity and expressiveness of Ruby with our tailored coding solutions.",
    "category": "Programming"
  },
  {
    "id": 26,
    "serviceName": "Java",
    "image": "/images/Java.jpg",
    "description": "Create cross-platform applications with Java programming expertise from Essayprof. Our Java coding services cover everything from desktop applications to enterprise-level systems. Trust us to deliver reliable and efficient Java code for your diverse software development needs.",
    "category": "Programming"
  },
  {
    "id": 27,
    "serviceName": "PHP",
    "image": "/images/PHP.jpg",
    "description": "Develop server-side web applications with Essayprof's expertise in PHP programming. Our PHP coding services ensure the seamless integration of dynamic features and functionalities into your web projects. Count on us for secure and scalable PHP solutions tailored to your specific requirements.",
    "category": "Programming"
  },
  {
    "id": 28,
    "serviceName": "SQL and MySQL",
    "image": "/images/SQL.jpg",
    "description": "Optimize your database interactions with Essayprof's SQL and MySQL coding services. From designing efficient database schemas to writing complex queries, our expertise ensures the reliability and performance of your data-driven applications. Unlock the full potential of SQL and MySQL with our tailored coding solutions.",
    "category": "Programming"
  },
  {
    "id": 29,
    "serviceName": "C/C++/C#",
    "image": "/images/C++ C# C.jpg",
    "description": "Dive into the world of low-level and object-oriented programming with Essayprof's expertise in C, C++, and C#. Whether you're working on system-level programming or developing applications, our coding services ensure clean, efficient, and maintainable code. Trust us for reliable solutions in C-based languages.",
    "category": "Programming"
  },
  {
    "id": 30,
    "serviceName": "Excel",
    "image": "/images/Excel.jpg",
    "description": "Perform data analysis on Excel with Essayprof's expertise. From organizing and cleaning data to creating insightful visualizations, our Excel services ensure that you extract meaningful insights from your datasets. Trust us for accurate and efficient data analysis using Excel.",
    "category": "Data Analysis"
  },
  {
    "id": 31,
    "serviceName": "SPSS",
    "image": "/images/SPSS.jpg",
    "description": "Conduct advanced statistical analysis with SPSS, a powerful software for social science research. Essayprof ensures accuracy and reliability in your SPSS-related tasks, providing comprehensive insights into your data. Whether it's descriptive statistics, regression analysis, or complex data interpretation, we've got you covered.",
    "category": "Data Analysis"
  },
  {
    "id": 32,
    "serviceName": "R",
    "image": "/images/R.jpg",
    "description": "Dive into data analysis with R, a versatile programming language for statistical computing. Essayprof offers expert assistance in R, helping you navigate through data visualization, statistical modeling, and exploratory data analysis. Unlock the potential of your datasets with our dedicated R programming services.",
    "category": "Data Analysis"
  },
  {
    "id": 33,
    "serviceName": "Stata",
    "image": "/images/Stata.jpg",
    "description": "Streamline your data analysis process with Stata, a robust software for researchers and analysts. Essayprof specializes in Stata-related tasks, from data management to econometric analysis. Our services ensure that your Stata projects are executed with precision, providing valuable insights for informed decision-making.",
    "category": "Data Analysis"
  },
  {
    "id": 34,
    "serviceName": "Tableau",
    "image": "/images/Tableau.jpg",
    "description": "Transform your data into interactive and visually appealing insights using Tableau. Essayprof excels in Tableau data analysis, creating dynamic dashboards and visualizations that convey complex information with clarity. Elevate your data-driven decision-making with our expertise in Tableau analytics.",
    "category": "Data Analysis"
  }
];


const categories = newJson.map((category: any) => {
  return category.name

})

console.log(categories)

const category = [
  "All",
  ...categories
]

const servicesData = services.map((serviceName, index) => ({
  id: index + 1,
  servicename: serviceName,
  image: "https://imgs.search.brave.com/_8DCna6q_hYrv1UAOmiop1cmXYjZAevafYuyj0i8smc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTA1OTI3MDQtNmM3/NmRlZmE5OTg1P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRCOGZIZHlh/WFJwYm1kOFpXNThN/SHg4TUh4OGZEQT0", // Assuming image filenames match service names
  description: `Get expert help with your ${serviceName} needs.`,
  category: serviceName.includes("Writing") ? "Writing Services" : "Academic Support",
}));




export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col p-4 relative ">



        {/* navbar section */}
        <div className='w-full'>
          <NavBar />
        </div>

        {/* hero section */}

        <div className='w-full flex flex-col lg:flex-row justify-between' id='home'>
          <div style={{
            flexBasis: "55%",
          }} className='rounded-md'>
            <div className='ml-4'>
              <HeroSection />

              <Content />

            </div>


          </div>
          <div style={{
            flexBasis: "45%",
            borderRadius: "52% 48% 0% 70% / 52% 0% 70% 52% "
          }} className='bg-blue-800 hover:scale-[105%] shadow-md w-full md:pl-[80px] md:rounded-full h-[300px] flex flex-col items-end md:items-center lg:pl-[80px] md:justify-center mt-[50px]'>
            <div className='h-full'>
              <h3 className='leading-6 font-semibold text-white text-md border-b-2 border-b-white border-w-[10px] flex items-center py-2 justify-center'>We Offer</h3>
              {/* <ul className='list-none text-white p-2 m-4'>
                {services.map((service, index)=>(
                  <li key={index} className='px-4 leading-8 space-y-2 cursor-pointer hover:text-black hover:font-semibold'>{service}</li>
                ))}
                
              </ul> */}
              <ServicesScrollArea services={services} />
            </div>

          </div>
        </div>


        <hr className='mt-8 border-2 w-full border-slate-500' />

        {/* about */}
        <div className='flex flex-col w-full' id='about'>

          <h2 className='mt-10 mb-5 leading-6 font-bold  text-3xl flex items-center justify-center'>About</h2>
          <div className='w-full mt-2 p-2 md:p-6 bg-blue-800 h-auto flex flex-col items-center rounded-md'>

            <p className='mt-2 flex flex-wrap p-0 md:px-4 text-white  w-full md:leading-8 md:w-[800px] text-sm md:text-lg mb-2 space-y-2 justify-center items-center'>
              EssayProf is your go-to professional tutoring and assignment help platform, committed to assisting you in elevating your academic performance and realizing your full potential across diverse fields of study. With our extensive experience, we offer professional support in drafting essays, preparing paper outlines, and sourcing high-quality academic resources. Place your order for an essay or article, and we will provide instant, high-quality online assistance to help you succeed.
            </p>
          </div>
        </div>

        {/* services */}

        <div className='flex flex-col w-full' id='services'>
          <h2 className='mt-10 leading-6 font-bold  text-3xl flex items-center justify-center'>Services</h2>

          <div className='overflow-x-visible flex justify-center items-center mt-4 mx-2 md:mx-0 w-full'>
            <Servicetab tabs={category} />
          </div>

          <div className='mt-4 gap-2'>
            <Services services={sampleWork} category={category} />
          </div>
        </div>
        <div className='flex flex-col w-full mt-4' id='samples'>
          <h2 className='mt-10 mb-5 leading-6 font-bold  text-3xl flex items-center justify-center'>Sample work</h2>

          {/* <div className='overflow-x-visible flex justify-center items-center mt-4'>
          <Servicetab tabs={category}/>
        </div> */}

          <div className='mt-4 gap-2'>
            <Sample samples={sampleWork} />


          </div>

        </div>

        {/* <div className='w-full md:w-[700px] relative'>

<CarouselSpacing/>

</div> */}


        <div className='md:grid grid-cols-2 gap-2'>
          {/* order form */}
          <div className='col-span-1 rounded-md p-4 mt-2 h-2/3'>
            <h2 className='text-md leading-6 font-bold flex flex-row items-center justify-center p-4 mb-4'>MAKE ORDER</h2>

            <MakeOrder services={services} />

          </div>

          {/* payment terms */}
          <div style={{

          }} className='col-span-1  s mt-2' id='paymentterms'>



            <div className='mt-6 h-full px-4'>


              <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-lg md:text-3xl font-bold text-gray-900 dark:text-white">Payment Method</h5>
                <div className='flex flex-col md:flex-row  justify-between gap-2 items-center w-full mb-2'>
                  {/* <button className='p-2 cursor-pointer bg-gray-100 rounded-md md:text-sm dark:text-black'>Western Union</button>
                <button className='p-2 cursor-pointer bg-gray-100 rounded-md md:text-sm dark:text-black'>Worldremit</button> */}
                  <button className='p-2 cursor-pointer bg-gray-100 rounded-md md:text-sm dark:text-black'>
                    <Image height={40} width={250} src="/airtm-seeklogo.svg" alt="Western Union Logo Svg, HD Png Download@kindpng.com" />
                  </button>
                  <button className='p-2 cursor-pointer bg-gray-100 rounded-md md:text-sm dark:text-black'>
                    <Image height={40} width={250} src="/Sendwave.svg" alt="Western Union Logo Svg, HD Png Download@kindpng.com" />
                  </button>
                  <button className='p-2 cursor-pointer bg-gray-100 rounded-md md:text-sm dark:text-black'>
                    <Image height={40} width={250} src="/Remitly.svg" alt="Western Union Logo Svg, HD Png Download@kindpng.com" />
                  </button>
                  <button className='p-2 cursor-pointer bg-gray-100 rounded-md md:text-sm dark:text-black'>
                    <Image height={40} width={250} src="/WorldRemit_logo.svg" alt="Western Union Logo Svg, HD Png Download@kindpng.com" />
                  </button>
                  <button className='p-2 cursor-pointer bg-gray-100 rounded-md md:text-sm dark:text-black'>

                    <Image height={120} width={280} src="https://www.kindpng.com/picc/m/212-2126557_western-union-logo-svg-hd-png-download.png" alt="Western Union Logo Svg, HD Png Download@kindpng.com" />
                  </button>
                  <button className='p-2 cursor-pointer bg-gray-100 rounded-md md:text-sm dark:text-black'>

                    <Image height={40} width={250} src="/payoneer-ar21.svg" alt="Western Union Logo Svg, HD Png Download@kindpng.com" />
                  </button>
                  {/* <button className='p-2 cursor-pointer bg-gray-100 rounded-md md:text-sm dark:text-black'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/WorldRemit_logo.svg" alt="Wireless Lan, Ethernet, Broadcast, Waves, Send, Station - Wifi Icon Green Png"  height={4} width={4}/>
                </button> */}
                </div>
                <div className='mt-4 p-4 w-1/2 mx-auto'>
                  <Payment />
                </div>

                {/* <div className='mt-4'>
                  <span className='m-2 text-xl font-semibold'>For mobile transfer</span>
                  <div className='flex flex-col md:flex-row gap-2 items-center mt-2'>
                    <button className='p-2 cursor-pointer bg-gray-100 rounded-md dark:text-black'>Mpesa Mobile Money Acc</button>
                    <p>(+254)704946436</p>
                  </div>


                  <span className='mt-4 mb-2 text-lg font-semibold'>Email</span>

                  <div className='mt-2 flex flex-col md:flex-row items-center justify-center'>
                    <a href="mailto:kevinmarshal44@gmail.com?subject=Inquiry" className='hover:cursor-pointer hover:text-blue-800'>kevinmarshal44@gmail.com</a></div>
                </div>

                <div className='flex flex-col m-4'>
                  <span className='m-2 text-lg font-semibold'>Account details</span>

                  <ul className='list-none'>
                    <li className='p-2'>Full Name: <span className='text-md font-bold'>Kelvin Njeru</span></li>
                    <li className='p-2'>City: <span className='text-md font-bold'>Nairobi</span></li>
                  </ul>

                </div> */}

                {/* <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <a href=""  className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="/paypal-svgrepo-com.svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                  <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Download on the</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                  </div>
                </a>
                <a href="" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                  <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Get in on</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div> */}
              </div>

            </div>

          </div>

        </div>


        {/* footer */}


      </main>
      <div className='w-full'>

        <Footer />

      </div>
    </>
  )
}
