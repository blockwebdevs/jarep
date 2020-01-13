import React from 'react'

import { JaConsumer } from '../ja-service-context'

const withJaService = () => (Wrapped) => {

    return (props) => {
        return (
            <JaConsumer>
                {
                    (jaService) => {
                        return <Wrapped {...props} jaService={jaService} />
                    }
                }
            </JaConsumer>
        )
    }
}

export default withJaService;