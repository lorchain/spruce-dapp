import React, { useState, SyntheticEvent } from 'react';
// import { Form, Input, Grid, Label, Icon } from 'semantic-ui-react';
import { Keyring } from '@polkadot/ui-keyring';
import { TxButton } from '../components/TxButton2';

import { Dropdown, Form, Input, Grid, Label, Icon, DropdownProps, InputOnChangeData } from 'semantic-ui-react';


interface Props {
  keyring: Keyring;
}

interface FormState {
  addressFrom: string;
  addressTo: string;
  amount: number;
}

const initialState: FormState = {
  addressFrom: '',
  addressTo: '',
  amount: 0
};

export default function Main (props: Props) {
  const { keyring } = props;
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string>('');
  const { addressTo, addressFrom, amount } = formState;
  const fromPair = (addressFrom && keyring.getPair(addressFrom)) || undefined;

    const keyringOptions = keyring.getPairs().map((account) => ({
      key: account.address,
      value: account.address,
      text: (account.meta.name as string).toUpperCase()
    }));
  
    const onChange = (_: SyntheticEvent<HTMLElement, Event>, data: InputOnChangeData | DropdownProps): void => {
      setFormState(formState => {
        return {
          ...formState,
          [data.state]: data.value
        };
      });
    };


  // const onChange = (_, data) =>
  //   setFormState(prev => ({ ...prev, [data.state]: data.value }));

  // const { addressTo, amount } = formState;

  return (
    <Grid.Column width={8}>
      <h1>Transfer</h1>
      <Form>
        <Form.Field>
          <Label basic color='teal'>
            <Icon name='hand point right' />
            1 Unit = 1000000000000
          </Label>
        </Form.Field>
        <Form.Field>Transfer more than the existential amount for account with 0 balance</Form.Field>
        <Form.Field>
          <Dropdown
            placeholder='Select from  your accounts'
            fluid
            label="From"
            onChange={onChange}
            search
            selection
            state='addressFrom'
            options={keyringOptions}
            value={addressFrom}
          />
        </Form.Field>
        <Form.Field>
          <Input
            onChange={onChange}
            label='To'
            fluid
            placeholder='address'
            state='addressTo'
            type='text'
            value={addressTo}
          />
        </Form.Field>
        <Form.Field>
          <Input
            label='Amount'
            fluid
            onChange={onChange}
            state='amount'
            type='number'
            value={amount}
          />
        </Form.Field>
        <Form.Field style={{ textAlign: 'center' }}>
          <TxButton
            accountPair={fromPair}
            label='Submit'
            type='SIGNED-TX'
            setStatus={setStatus}
            attrs={{
              palletRpc: 'balances',
              callable: 'transfer',
              inputParams: [addressTo, amount],
              paramFields: [true, true]
            }}
          />
        </Form.Field>
        <div style={{ overflowWrap: 'break-word' }}>{status}</div>
      </Form>
    </Grid.Column>
  );
}
