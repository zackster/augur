import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MarketPortfolioCard from 'modules/market/components/market-portfolio-card/market-portfolio-card'

export default class Positions extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    markets: PropTypes.array.isRequired,
    isTradeCommitLocked: PropTypes.bool,
    closePositionStatus: PropTypes.object.isRequired,
    scalarShareDenomination: PropTypes.object.isRequired,
    orderCancellation: PropTypes.object.isRequired,
    registerBlockNumber: PropTypes.number
  }

  render() {
    const p = this.props

    return (
      <article className="my-positions">
        big honk zone
        {p.markets.map((market) => (
          <MarketPortfolioCard
            key={market.id}
            market={market}
            closePositionStatus={p.closePositionStatus}
            isTradeCommitLocked={p.isTradeCommitLocked}
            scalarShareDenomination={p.scalarShareDenomination}
            orderCancellation={p.orderCancellation}
            location={p.location}
            history={p.history}
          />
        ))}
      </article>
    )
  }
}
