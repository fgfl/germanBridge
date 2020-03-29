import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../components/Card';

storiesOf('Card', module)
  .add('Ace', () => (
    <Fragment>
      <Card cardData={{ number: 1, suit: 'spades' }}></Card>
      <Card cardData={{ number: 1, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 1, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 1, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('2', () => (
    <Fragment>
      <Card cardData={{ number: 2, suit: 'spades' }}></Card>
      <Card cardData={{ number: 2, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 2, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 2, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('3', () => (
    <Fragment>
      <Card cardData={{ number: 3, suit: 'spades' }}></Card>
      <Card cardData={{ number: 3, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 3, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 3, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('4', () => (
    <Fragment>
      <Card cardData={{ number: 4, suit: 'spades' }}></Card>
      <Card cardData={{ number: 4, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 4, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 4, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('5', () => (
    <Fragment>
      <Card cardData={{ number: 5, suit: 'spades' }}></Card>
      <Card cardData={{ number: 5, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 5, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 5, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('6', () => (
    <Fragment>
      <Card cardData={{ number: 6, suit: 'spades' }}></Card>
      <Card cardData={{ number: 6, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 6, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 6, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('7', () => (
    <Fragment>
      <Card cardData={{ number: 7, suit: 'spades' }}></Card>
      <Card cardData={{ number: 7, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 7, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 7, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('8', () => (
    <Fragment>
      <Card cardData={{ number: 8, suit: 'spades' }}></Card>
      <Card cardData={{ number: 8, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 8, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 8, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('9', () => (
    <Fragment>
      <Card cardData={{ number: 9, suit: 'spades' }}></Card>
      <Card cardData={{ number: 9, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 9, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 9, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('10', () => (
    <Fragment>
      <Card cardData={{ number: 10, suit: 'spades' }}></Card>
      <Card cardData={{ number: 10, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 10, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 10, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('jack', () => (
    <Fragment>
      <Card cardData={{ number: 11, suit: 'spades' }}></Card>
      <Card cardData={{ number: 11, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 11, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 11, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('queen', () => (
    <Fragment>
      <Card cardData={{ number: 12, suit: 'spades' }}></Card>
      <Card cardData={{ number: 12, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 12, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 12, suit: 'diamonds' }}></Card>
    </Fragment>
  ))
  .add('king', () => (
    <Fragment>
      <Card cardData={{ number: 13, suit: 'spades' }}></Card>
      <Card cardData={{ number: 13, suit: 'hearts' }}></Card>
      <Card cardData={{ number: 13, suit: 'clubs' }}></Card>
      <Card cardData={{ number: 13, suit: 'diamonds' }}></Card>
    </Fragment>
  ));
