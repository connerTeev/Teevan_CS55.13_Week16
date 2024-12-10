import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
} from '@ionic/react';
import React from 'react';
import { useState, useEffect } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [dataset, setDataset] = useState<any[]>([]);

  const dataURL =
    'https://dev-teevan-fall-cs55-13.pantheonsite.io/wp-json/twentytwentyone-child/v1/special/';

  useEffect(() => {
    fetch(dataURL)
      .then((response) => response.json())
      .then((data) => setDataset(data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Special</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Special</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList id="special-list">
          <IonListHeader>Special</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.post_title}</h4>
                <p>{item.special_description}</p>
                <address>{item.special_address}</address>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
