import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import pdfFile from './Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Development Engineer - Kaseya <span>2018-2020</span></h2>
                        <p>After graduating from UNLV, joined Kaseya as a FTE working on the AuthAnvil product.
                          
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Development Engineer Intern - Kaseya <span>2017</span></h2>
                        <p>I joined Kaseya during my Senior year of school as they were a Las Vegas based company, allowing me to work and attend my final year. 
                          Initially worked on Natural Language Processing (NLP) application that would serve as an assistant to get your initial updates when starting the day.
                          Transitioned into working on the company's Microservice architecture proof of concept. Allowed me to dive heavily into the newest technologies at the time
                          with Docker coming into extreme popularity and .Net Core in the late stages of beta. Also led a node.js project that would allow internal developers to generate a templated
                          microservice project hooked up with standardized components for integrated authentication, logging, swagger API documentation, server configuration, and database configuration and the ability to instantly deploy it all with Docker.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineering Intern - Verzion <span>2016</span></h2>
                        <p>Worked as an intern on the Android version of the MyFios mobile application. 
                          While there the team was working on porting the application from a browser app embedded into an Android app into a native Android experience.
                          Primarily focused on developing the UI for the application in which google material design was heavily leveraged for design patterns.
                          Required me to crash course learn Android/Java in order to meaningfully contribute to the project. Work involved peer coding, code reviews, standups, unit testing code, requirements meetings,</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>B.S. in Computer Science - University of Nevada, Las Vegas <span>2012-2017</span></h2>
                        <p>Began college with the intent of following in my father's footsteps and getting my degree in Accounting. 
                          After my first two semesters I found I kind of hated accounting and took an intro to CS class since I 
                          had always liked technology, but had never been introduced to any sort of programming in my life. It was 
                          an easy choice from that semester onwards that I would pursue a degree in Computer Science. Ended with a 
                          GPA of 3.5 and made the Dean's list 6 semesters with the Department of Engineering.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-md-12">
                <div className="timeline-centered">
                <Document
                  file={pdfFile}
                  onLoadError={console.error}
                >
                  <Page pageNumber={1} />
                </Document>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
