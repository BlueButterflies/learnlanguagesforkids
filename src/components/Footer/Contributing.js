import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Contributing = () => {
    return (
        <div className='contributing text-primary-emphasis'>
            <h2>Contributing to Learn languages for kids</h2>
            <Accordion className='m-5' defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Table of Contents</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        <ol>
                            <li>
                                <a href='#types-of-contributions'>
                                    Types of contributions
                                </a>
                            </li>
                            <li>
                                <a href='#ground-rules'>
                                    Ground rules
                                </a>
                            </li>
                            <li>
                                <a href='#how-to-contribute'>
                                    How to contribute
                                </a>
                            </li>
                            <li >
                                <a href='#community'>
                                    Community
                                </a>
                            </li>

                        </ol>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header id='types-of-contributions'>Types of contributions</Accordion.Header>
                    <Accordion.Body  className='text-start'>
                      <p>There are many ways you can directly contribute to the guides (in descending order of need):</p>
                      <ul>
                        <li>Fix editorial inconsistencies or inaccuracies</li>
                        <li>New ideals for project aspect</li>
                        <li>Bugs</li>
                        <li>
                            <a href=''>
                                Add language
                            </a>
                        </li>
                      </ul>
                       <p>Interested in contributing to the project? Read on!</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header id='ground-rules'>Ground rules</Accordion.Header>
                    <Accordion.Body  className='text-start'>
                      <p>
                        Before we get started, here are a few things we expect from you (and that you should expect from others):
                      </p>
                      <ul>
                        <li>
                            Be kind and thoughtful in your conversations around this project.
                             We all come from different backgrounds and projects, which means we likely have different 
                             perspectives on "how open source is done." Try to listen to others rather than convince them that 
                             your way is correct.
                        </li>
                        <li>
                            Lear With Me are released with a <a href='CODE_OF_CONDUCT.md'>Contributor Code of Conduct</a>. 
                            By participating in this project, you agree to abide by its terms.
                        </li>
                        <li>
                            Please ensure that your contribution passes all tests if you open a pull request. 
                            If there are test failures, you will need to address them before we can merge your contribution.
                        </li>
                        <li>
                            When adding content, please consider if it is widely valuable. Please don't add references or 
                            links to things you or your employer have created, as others will do so if they appreciate it.
                        </li>
                      </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='3'>
                    <Accordion.Header id='how-to-contribute'>How to contribute</Accordion.Header>
                    <Accordion.Body   className='text-start'>
                        <p>
                            Do you want to contribute? Check <a href='https://github.com/BlueButterflies/learnlanguagesforkids/pulls' target='_blank'>pull requests</a> to 
                            see if anyone else has raised a similar idea or question.
                        </p>
                        <p>
                            If you don't see your idea listed and you think it will help the project, open a pull request.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='4'>
                    <Accordion.Header id='community'>Community</Accordion.Header>
                    <Accordion.Body   className='text-start'>
                        <p>
                            Discussions about the Lear With Me take place on this repository's <a href='https://github.com/BlueButterflies/learnlanguagesforkids/issues' target='_blank'>Issues</a> and <a href='https://github.com/BlueButterflies/learnlanguagesforkids/pulls' target='_blank'>Pull Requests</a> sections.
                            Anybody is welcome to join these conversations.
                        </p>
                        <p>
                            Wherever possible, do not take these conversations to private channels, including contacting 
                            the maintainers directly. Keeping communication public means everybody can benefit and learn 
                            from the conversation.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}

export default Contributing