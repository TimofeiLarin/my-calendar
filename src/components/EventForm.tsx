import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';
import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSector';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import { formatDate } from '../utils/date';
import { rules } from '../utils/rules';

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventForm: React.FC<EventFormProps> = ({ guests, submit }) => {
  const [event, setEvent] = React.useState<IEvent>({
    author: '',
    guest: '',
    date: '',
    description: '',
  } as IEvent);

  const { user } = useTypedSelector(state => state.authReducer)

  const selectDate = (date: Moment | null) => {
    if (date) setEvent({ ...event, date: formatDate(date.toDate()) });
  };

  const submitForm = () => {
    // console.log({...event, author: user.username})
    submit({...event, author: user.username})
  }
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={submitForm}
      autoComplete='off'
    >
      <Form.Item
        label='Description event'
        name='description'
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item label='Date event' name='date' rules={[rules.required(), rules.isDateAfter('Сan not create an event in the past')]}>
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item label='Select guest' name='guests' rules={[rules.required()]}>
        <Select
          style={{ width: 120 }}
          onChange={(guest: string) => setEvent({ ...event, guest })}
        >
          {guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify='center'>
        <Button type='primary' htmlType='submit'>
          Create event
        </Button>
      </Row>
    </Form>
  );
};

export default EventForm;
