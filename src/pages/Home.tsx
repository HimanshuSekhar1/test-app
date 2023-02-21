import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {IonApp, IonIcon} from '@ionic/react'
import {filter, notificationsOutline} from 'ionicons/icons';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonTextarea, IonItem, IonText } from '@ionic/react';
import { IonLabel, IonList, IonToggle } from '@ionic/react';
import { IonAvatar, IonChip } from '@ionic/react';
import { IonFab, IonFabButton } from '@ionic/react';
import { add } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <>
    {/* For the menu bar */}
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
          <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <h1 className="ion-padding">This is the menu content.</h1>
          {/* <IonToggle enableOnOffLabels={true}></IonToggle> */}
          <IonItem>
            <IonLabel>
              Default Item Lines
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>Item Lines Inset</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>Item Lines Full</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>Item Lines None</IonLabel>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow>
                <p>Light</p>
                <IonToggle color="dark" checked={true}></IonToggle>
                <p>Dark</p>
              </IonRow>
            </IonGrid>
          </IonItem>
          
        </IonContent>
      </IonMenu>

      {/* For the body content */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
              <IonTitle color="secondary">Copit</IonTitle>
              <IonIcon slot = "end" icon= {notificationsOutline}></IonIcon>
              <IonIcon slot = "end" icon= {filter} class = "ion-margin-horizontal"></IonIcon>
            {/* <IonIcon class="ion-justify-content-end" icon= {notificationsOutline}></IonIcon> */}
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonText color="secondary">
            <h2>Hi User,</h2>
          </IonText>
          {/* <h1>Hi User,</h1> */}
          <p>How can I help you ?</p>
          <IonTextarea className="custom-textarea" placeholder="Type your question" autoGrow={true}></IonTextarea>
          <IonButton shape="round">Search</IonButton>
        </IonContent>
      </IonPage>
      
    </>
  );
};

export default Home;
