import React from 'react'
import { Accordion, ListGroup, ListGroupItem } from 'react-bootstrap';

const License = () => {
    return (
        <div className='license text-primary-emphasis'>
            <h2>License</h2>
            <Accordion className='m-5' defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Attribution-NonCommercial-ShareAlike 4.0 International</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Creative Commons Corporation ("Creative Commons") is not a law firm and
                        does not provide legal services or legal advice. Distribution of
                        Creative Commons public licenses does not create a lawyer-client or
                        other relationship. Creative Commons makes its licenses and related
                        information available on an "as-is" basis. Creative Commons gives no
                        warranties regarding its licenses, any material licensed under their
                        terms and conditions, or any related information. Creative Commons
                        disclaims all liability for damages resulting from their use to the
                        fullest extent possible.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Using Creative Commons Public Licenses</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Creative Commons public licenses provide a standard set of terms and
                        conditions that creators and other rights holders may use to share
                        original works of authorship and other material subject to copyright
                        and certain other rights specified in the public license below. The
                        following considerations are for informational purposes only, are not
                        exhaustive, and do not form part of our licenses.

                        <p className='text-secondary m-4'>
                            Considerations for licensors: Our public licenses are
                            intended for use by those authorized to give the public
                            permission to use material in ways otherwise restricted by
                            copyright and certain other rights. Our licenses are
                            irrevocable. Licensors should read and understand the terms
                            and conditions of the license they choose before applying it.
                            Licensors should also secure all rights necessary before
                            applying our licenses so that the public can reuse the
                            material as expected. Licensors should clearly mark any
                            material not subject to the license. This includes other CC-
                            licensed material, or material used under an exception or
                            limitation to copyright. <a href='wiki.creativecommons.org/Considerations_for_licensors' target='_blank'>
                                More considerations for licensors
                            </a>
                        </p>
                        <p className='text-secondary m-4'>
                            Considerations for the public: By using one of our public
                            licenses, a licensor grants the public permission to use the
                            licensed material under specified terms and conditions. If
                            the licensor's permission is not necessary for any reason--for
                            example, because of any applicable exception or limitation to
                            copyright--then that use is not regulated by the license. Our
                            licenses grant only permissions under copyright and certain
                            other rights that a licensor has authority to grant. Use of
                            the licensed material may still be restricted for other
                            reasons, including because others have copyright or other
                            rights in the material. A licensor may make special requests,
                            such as asking that all changes be marked or described.
                            Although not required by our licenses, you are encouraged to
                            respect those requests where reasonable. <a href='wiki.creativecommons.org/Considerations_for_licensees' target='_blank'>
                                More considerations for the public
                            </a>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                                Public License
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                By exercising the Licensed Rights (defined below), You accept and agree
                                to be bound by the terms and conditions of this Creative Commons
                                Attribution-NonCommercial-ShareAlike 4.0 International Public License
                                ("Public License"). To the extent this Public License may be
                                interpreted as a contract, You are granted the Licensed Rights in
                                consideration of Your acceptance of these terms and conditions, and the
                                Licensor grants You such rights in consideration of benefits the
                                Licensor receives from making the Licensed Material available under
                                these terms and conditions.
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <strong>Section 1 -- Definitions.</strong>
                                <ListGroup as="ul">
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>a.</strong> Adapted Material means material subject to Copyright and Similar
                                        Rights that is derived from or based upon the Licensed Material
                                        and in which the Licensed Material is translated, altered,
                                        arranged, transformed, or otherwise modified in a manner requiring
                                        permission under the Copyright and Similar Rights held by the
                                        Licensor. For purposes of this Public License, where the Licensed
                                        Material is a musical work, performance, or sound recording,
                                        Adapted Material is always produced where the Licensed Material is
                                        synched in timed relation with a moving image.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>b.</strong> Adapter's License means the license You apply to Your Copyright
                                        and Similar Rights in Your contributions to Adapted Material in
                                        accordance with the terms and conditions of this Public License.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>c.</strong> BY-NC-SA Compatible License means a license listed at <a href='https://creativecommons.org/share-your-work/licensing-considerations/compatible-licenses/' target='_blank'>
                                            creativecommons.org/compatiblelicenses
                                        </a>, approved by Creative Commons as essentially the equivalent of this Public License.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>d.</strong> Copyright and Similar Rights means copyright and/or similar rights
                                        closely related to copyright including, without limitation,
                                        performance, broadcast, sound recording, and Sui Generis Database
                                        Rights, without regard to how the rights are labeled or
                                        categorized. For purposes of this Public License, the rights
                                        specified in Section 2(b)(1)-(2) are not Copyright and Similar Rights.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>e.</strong> Effective Technological Measures means those measures that, in the
                                        absence of proper authority, may not be circumvented under laws
                                        fulfilling obligations under Article 11 of the WIPO Copyright
                                        Treaty adopted on December 20, 1996, and/or similar international
                                        agreements.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>f.</strong> Exceptions and Limitations means fair use, fair dealing, and/or
                                        any other exception or limitation to Copyright and Similar Rights
                                        that applies to Your use of the Licensed Material.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>g.</strong> License Elements means the license attributes listed in the name
                                        of a Creative Commons Public License. The License Elements of this
                                        Public License are Attribution, NonCommercial, and ShareAlike.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>h.</strong> Licensed Material means the artistic or literary work, database,
                                        or other material to which the Licensor applied this Public
                                        License.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>i.</strong> Licensed Rights means the rights granted to You subject to the
                                        terms and conditions of this Public License, which are limited to
                                        all Copyright and Similar Rights that apply to Your use of the
                                        Licensed Material and that the Licensor has authority to license.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>j.</strong> Licensor means the individual(s) or entity(ies) granting rights
                                        under this Public License.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>k.</strong> NonCommercial means not primarily intended for or directed towards
                                        commercial advantage or monetary compensation. For purposes of
                                        this Public License, the exchange of the Licensed Material for
                                        other material subject to Copyright and Similar Rights by digital
                                        file-sharing or similar means is NonCommercial provided there is
                                        no payment of monetary compensation in connection with the
                                        exchange.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>l.</strong> Share means to provide material to the public by any means or
                                        process that requires permission under the Licensed Rights, such
                                        as reproduction, public display, public performance, distribution,
                                        dissemination, communication, or importation, and to make material
                                        available to the public including in ways that members of the
                                        public may access the material from a place and at a time
                                        individually chosen by them.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>m.</strong> Sui Generis Database Rights means rights other than copyright
                                        resulting from Directive 96/9/EC of the European Parliament and of
                                        the Council of 11 March 1996 on the legal protection of databases,
                                        as amended and/or succeeded, as well as other essentially
                                        equivalent rights anywhere in the world.
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className='text-secondary'>
                                        <strong>n.</strong> You means the individual or entity exercising the Licensed Rights
                                        under this Public License. Your has a corresponding meaning.
                                    </ListGroup.Item>

                                </ListGroup>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Section 2 -- Scope.</strong>
                                <ListGroup as="ul">
                                    <ListGroup.Item as="li" className='text-secondary'>
                                    <strong>a. License grant.</strong> 
                                    <ListGroup as="ul">
                                        <ListGroup.Item  as="li" className='text-secondary'>
                                            <strong>1.</strong> Subject to the terms and conditions of this Public License,
                                                the Licensor hereby grants You a worldwide, royalty-free,
                                                non-sublicensable, non-exclusive, irrevocable license to
                                                exercise the Licensed Rights in the Licensed Material to:
                                                <ListGroup as="ul">
                                                    <ListGroup.Item as="li" className='text-secondary'>
                                                        <strong>a.</strong> reproduce and Share the Licensed Material, in whole or
                                                        in part, for NonCommercial purposes only; and
                                                    </ListGroup.Item>
                                                    <ListGroup.Item as="li" className='text-secondary'>
                                                        <strong>b.</strong> produce, reproduce, and Share Adapted Material for
                                                        NonCommercial purposes only.
                                                    </ListGroup.Item>
                                                </ListGroup>
                                        </ListGroup.Item>
                                        <ListGroup.Item  as="li" className='text-secondary'>
                                                <strong>2.</strong> Exceptions and Limitations. For the avoidance of doubt, where
                                                Exceptions and Limitations apply to Your use, this Public
                                                License does not apply, and You do not need to comply with
                                                its terms and conditions.
                                        </ListGroup.Item>
                                    </ListGroup>
                                    </ListGroup.Item>
                                </ListGroup>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}

export default License