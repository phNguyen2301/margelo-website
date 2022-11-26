import Image from 'next/image';
import React from 'react';
import SliderContainer, { SliderItem } from './slider';

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className='' contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/audubon.webp'
          width={150}
          height={50}
          alt='Audubon'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/coinbase.webp'
          width={150}
          height={50}
          alt='Coinbase'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/exodus.webp'
          width={150}
          height={50}
          alt='Exodus'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/expensify.webp'
          width={150}
          height={50}
          alt='Expensify'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/extra.webp'
          width={150}
          height={50}
          alt='Extra'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/litentry.webp'
          width={150}
          height={50}
          alt='Litentry'
        />
      </SliderItem>
    </SliderContainer>
    <SliderContainer className='mt-10' contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/picnic.webp'
          width={150}
          height={50}
          alt='Picnic'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/pinkpanda.webp'
          width={150}
          height={50}
          alt='Pinkpanda'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/rainbow.webp'
          width={150}
          height={50}
          alt='Rainbow'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/scribeware.webp'
          width={150}
          height={50}
          alt='Scribeware'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/shopify.webp'
          width={150}
          height={50}
          alt='Shopify'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/showtime.webp'
          width={150}
          height={50}
          alt='Showtime'
        />
      </SliderItem>
    </SliderContainer>
    <SliderContainer className='mt-10' contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/slingshot.webp'
          width={150}
          height={50}
          alt='Slingshot'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/snapcalorie.webp'
          width={150}
          height={50}
          alt='Snapcalorie'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/status.webp'
          width={150}
          height={50}
          alt='Status'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/steakwallet.webp'
          width={150}
          height={50}
          alt='Stakewallet'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/stori.webp'
          width={150}
          height={50}
          alt='Stori'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/tocsen.webp'
          width={150}
          height={50}
          alt='Tocsen'
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src='/assets/logo/walletconnect.webp'
          width={150}
          height={50}
          alt='Walletconnect'
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
