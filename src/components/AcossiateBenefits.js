import React, { useState } from 'react';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbTicket } from 'react-icons/tb';
import { BsTruck } from 'react-icons/bs';
import { ImGift } from 'react-icons/im';
import style from '../styles/associateBenefits.module.css';

const AssociateBenefits = () => {
  const [state, setState] = useState({
    ticket: true,
    money: false,
    truck: false,
    gift: false,
  });
  const { ticket, money, truck, gift } = state;

  const handleClick = (name) => {
    setState({
      [name]: true,
    });
  };

  return (
    <section className={ style.main_sect }>
      <h2>Como Sócio Wine, você garante benefícios exclusivos</h2>
      <section className={ style.items_p_sect }>
        <section className={ style.items_sect }>
          <section
            onClick={ () => handleClick('ticket') }
            className={ ticket ? style.active : '' }
            role="presentation"
          >
            <TbTicket className={ style.icon } />
            <p>15% OFF em todas as compras</p>
          </section>
          <section
            onClick={ () => handleClick('money') }
            className={ money ? style.active : '' }
            role="presentation"
          >
            <GiTakeMyMoney className={ style.icon } />
            <p>Ganhe 3x mais cashback em qualquer compra</p>
          </section>
          <section
            onClick={ () => handleClick('truck') }
            className={ truck ? style.active : '' }
            role="presentation"
          >
            <BsTruck className={ style.icon } />
            <p>Taxa de entrega diferenciada</p>
          </section>
          <section
            onClick={ () => handleClick('gift') }
            className={ gift ? style.active : '' }
            role="presentation"
          >
            <ImGift className={ style.icon } />
            <p>Ganhe brindes + cashback indicando amigos</p>
          </section>
        </section>
        <section className={ style.p_sect }>
          {ticket && (
            <p>
              Sócio Wine tem 15% de desconto em todas as compras no site, app e lojas
              {' '}
              físicas. Se assinar mais de um Clube, você passa a ter 20% OFF para comprar!
            </p>
          )}
          {money && (
            <p>
              Todas as compras realizadas na loja, app e assinaturas do Clube Wine geram
              {' '}
              3x mais cashback através do programa de recompensas, o WineUP.
            </p>
          )}
          {truck && (
            <p>
              Frete gratuito para regiões Sul e Sudeste em compras acima de R$ 99.
              {' '}
              Para as demais regiões e abaixo deste valor, a taxa de entrega é reduzida.
              {' '}
              Você pode conferir o valor do frete no carrinho de compras.
            </p>
          )}
          {gift && (
            <p>
              Se o indicado assinar o Clube Wine usando o seu código de indicação,
              {' '}
              vocês ganham o brinde do mês + cashback para usar no app. Indique quantos
              {' '}
              amigos quiser: quanto mais indicar, mais cashback você vai ganhar!
            </p>
          )}
        </section>
      </section>
    </section>
  );
};

export default AssociateBenefits;
