/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import resume from './media/files/Resume 2022 v2.4.pdf';

const Content = () => {
  return (
    <div className='section-header-padding' id='professional-wrapper'>
      <div className='row'>
        <h3 className='center'>My Professional Resources</h3>
        <h5 className='center'>
          Are you looking for more information regarding my professional career?
          Here are some resources that might help, including my resume and
          helpful links!
        </h5>
      </div>
      <div className='row'>
        <object
          className='pdf'
          data={resume}
          type='application/pdf'
          width='100%'
          height='100%'>
          <p>
            PDF not displaying correctly?
            <a href={resume} download>
              Download
            </a>
          </p>
        </object>
      </div>
      <div className='row'>
        <h4 className='center'>Professional FAQs</h4>
        <h5 className='center'>
          Here are a handful of FAQs that often come up when discussing my
          resume and professional life. Please take a look to see if your
          questions is answered here. Thank you!
        </h5>
      </div>
      <div className='row'>
        <div className='col s12 m6'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>
                Your resume says that you don't have a completed Degree. Why is
                that?
              </span>
              <p>
                I was in my Senior year at Appalachian State University when
                numerous medical and personal situations escalated to the point
                where I decided that it'd be best to withdraw from school in
                order to more effectively treat and manage them. Covid started
                shortly after that, and a variety of reasons have kept me from
                returning to finish my (mostly complete) degree.
              </p>
            </div>
          </div>
        </div>
        <div className='col s12 m6'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>
                Do you plan on returning to App State to complete your degree?
              </span>
              <p>
                While I do plan on completing my Computer Science degree, it's
                not necessarily going to be at App State. It largely depends on
                factors such as whether or not I have a stable job in the
                Triangle (in which case I would look at transfering to a local
                college) or the cost of completing the degree at different
                universities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m6'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>
                What's this gap in your work experience between [Feb. 2020 -
                June 2021]/[Jan. 2022 - Present]?
              </span>
              <p>
                The first gap is due to the same reasons that I withdrew from my
                degree program early (personal and medical), and the second is
                after I chose to leave my last job. The job market hasn't been
                kind and I've also been working to figure out what direction I
                want to move in regarding my career.
              </p>
            </div>
          </div>
        </div>
        <div className='col s12 m6'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>
                Why did you leave your job at Fidelity after only 6 months?
              </span>
              <p>
                Essentially, that position wasn't a good fit for me. I was doing
                well with the job and I worked great with clients (this was
                feedback from my manager), however there were certain parts of
                the job that were much too overwhelming for me. After much
                deliberation I decided it would be best to leave that position
                and find a job that was a better fit for me, and I left Fidelity
                on good terms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='section-header-padding'></div>
    </div>
  );
};

class ProfessionalContent extends Component {
  render() {
    return <Content />;
  }
}

export default ProfessionalContent;
