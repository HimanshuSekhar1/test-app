import React from 'react';
import { IonButton, IonButtons, IonContent, IonImg, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Splash.css';
import logo from '/workspaces/codespaces-blank/test-app/src/components/appLogo.svg';
// import {IonApp, IonIcon} from '@ionic/react'
// import {filter, notificationsOutline} from 'ionicons/icons';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonTextarea, IonItem, IonText } from '@ionic/react';
// import { IonLabel, IonList, IonToggle } from '@ionic/react';
// import { IonAvatar, IonChip } from '@ionic/react';
// import { IonFab, IonFabButton } from '@ionic/react';
// import { add } from 'ionicons/icons';


const Splash: React.FC = () => {
    return (
          <IonContent>
            <div className='centered-div'>
              <IonImg src={logo} className = "applogo"/>
              <IonText><h2>Copit</h2></IonText>
            </div>
          </IonContent>
    );
  };
  
  export default Splash;