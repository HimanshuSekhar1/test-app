import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Splash.css';
import {IonApp, IonIcon} from '@ionic/react'
import {filter, notificationsOutline} from 'ionicons/icons';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonTextarea, IonItem, IonText } from '@ionic/react';
import { IonLabel, IonList, IonToggle } from '@ionic/react';
import { IonAvatar, IonChip } from '@ionic/react';
import { IonFab, IonFabButton } from '@ionic/react';
import { add } from 'ionicons/icons';

const Splash: React.FC = () => {
    return (
          <IonContent>
            <div className='centered-div'>
                Hi User
            </div>
          </IonContent>
    );
  };
  
  export default Splash;