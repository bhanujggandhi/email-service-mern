import React from 'react';

import HelpItem from './HelpItem';

import '../styles/HelpPage.scss';

const HelpPage = () => {
  return (
    <ul className='process'>
      <HelpItem
        number={1}
        title='Login'
        subtitle='We have two ways for you to log in. Google Login or Github Login. Please Check the Header or Homepage to Login'
      />
      <HelpItem
        number={2}
        title='Add Credits'
        subtitle='You will need credits to use this application. Hit the Add Credits button to Pay. Its just 100 bucks for 5 credits. (You can send 1 survey from 1 credit. Dont worry you dont have to pay real money. Just use test card to test this application)'
      />
      <HelpItem
        number={3}
        title='Fill in the details'
        subtitle='Any Email would work. Put test card no. 4242 4242 4242 4242 with date 10/2022. For CVC any 3-digit number would work. Hit Pay! Tadaaa, You have got 5 credits.'
      />
      <HelpItem
        number={4}
        title='Create Survey'
        subtitle='To create new survey Hit + icon. Enter Survey Title, just for your reference, this could be anything. Carefully choose the subject line and the email body, these details will be added to the survey emails for your users. Fill out the recipient list of emails and divide each email by a comma and a space (abc@abc.com, def@def.com, ghi@ghi.com) Hit next.'
      />
      <HelpItem
        number={5}
        title='Check Carefully'
        subtitle='Once again, please review all the information carefully, they can not be taken back once submitted. Now you can hit Survey Send button.'
      />
      <HelpItem
        number={6}
        title='Finally'
        subtitle='An email is sent to all emails in the recipient list which are legitimate. Yes or no field in the dashboard email card will be changed according to whether or not user clicks yes or no in the emails sent whether they like your service or not.'
      />
    </ul>
  );
};

export default HelpPage;
