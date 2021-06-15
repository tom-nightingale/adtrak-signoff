import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import Roundworks from '../components/roundworks'
import Button from '../components/button'
import ChangeFeature from '../components/changeFeature'
import NextStep from '../components/nextStep'
import { motion } from 'framer-motion'

export default function Home() {
   
  const nextSteps = [
    'Send website imagery and branding to your designer',
    'Provide assets that we need, certificates, testimonials etc.',
    'Review the copywriting concept quickly',
    'Provide access to any third party accounts (MailChimp, etc)',
    'Review your staging links and offer feedback quickly',
    'Find out where your email and domain names are',
  ];

  return (

    <Layout>

        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>Confirmed | Adtrak Sign Off</title>
            <meta
            name="description"
            content="Adtrak Sign off Form"
            />
            <meta name="og:title" content="Adtrak Sign off Form" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <motion.div 
          key="homepage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: .25}}
        >
          <Header
            heading="Sign Off Confirmed!"
            subheading="Thanks! We've received your signoff form and your project will now move to the build phase."
          />


          <section id="whatHappensNext" className="bg-secondary-dark">

            <Container>

              <div className="p-6 text-white md:p-20 lg:w-8/12 xl:w-7/12 2xl:w-2/3 lg:px-0 lg:mx-auto">
                
                <div className="mx-auto text-center">

                  <h2 className="mb-4">What happens next?</h2>
                  
                  <div className="mx-auto lg:w-2/3 content">
                    <p>Now you've signed off your design, we'll begin to code your website. This transforms the design into a fully functioning, accessible website.</p>
                    <p className="text-secondary-light">Remember to...</p>
                  </div>
                  
                </div>

                <div className="flex flex-wrap mt-6">

                  {nextSteps.map((step, i) => {
                    return(
                        <NextStep key={i} step={step} />                      
                    )
                  })}

                </div>

              </div> 

            </Container>           


            <Roundworks
              classModifiers="bg-secondary"
            />
            
          </section>
          
        </motion.div>

    </Layout>

  )
}