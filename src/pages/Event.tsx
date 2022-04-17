import React from 'react';
import { Button, Layout, Modal, Row } from 'antd';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSector';
import { IEvent } from '../models/IEvent';

const Event: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { fetchGuest, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector((state) => state.eventReducer);
  const { user } = useTypedSelector((state) => state.authReducer);

  React.useEffect(() => {
      fetchGuest();
      fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  };

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify='center'>
        <Button onClick={() => setModalVisible(true)}>Add event</Button>
      </Row>
      <Modal
        title='Add event'
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
