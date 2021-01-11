import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Image from '../../resources/logo192.png'

export const MainIcon = () => {

    return (
        <Figure>
            <Figure.Image
                width={40}
                height={40}
                alt="30x30"
                src={Image}
            />
        </Figure>
    )
}


