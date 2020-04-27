import React from "react"
import PricingForm from "./PricingForm"
import { colors, meta } from "../../theme"
import { AppIcon } from "../../svg"

import "./PaymentModal.scss"

const PaymentModal = ({ rootRef }) => {
  const handleExitClick = () => {
    rootRef.current && rootRef.current.classList.remove("is-active")
  }

  const scrollToResources = () => {
    document.querySelector("#resources").scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div ref={rootRef} className="payment-modal modal">
      <div className="modal-background"></div>
      <div className="modal-card" css={{ borderRadius: 10 }}>
        <header
          css={{ backgroundColor: colors.brand }}
          className="modal-card-head"
        >
          <div className="modal-card-title">
            <div
              css={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <img
                alt="logo"
                src={AppIcon}
                css={{ width: 120, marginRight: "1rem" }}
              />
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p css={{ color: colors.lightHighlight }} className="is-size-4">
                  Let's set up your {meta.app.title} plan.
                </p>
                <p css={{ color: colors.lightHighlight }} className="is-size-6">
                  Enrollment takes about 3 minutes.
                </p>
              </div>
            </div>
          </div>
        </header>
        <section
          css={{ padding: 0, backgroundColor: colors.lightHighlight }}
          className="modal-card-body"
        >
          <PricingForm
            onCancel={handleExitClick}
            onCheckoutSuccess={() => handleExitClick() && scrollToResources()}
          />
        </section>
      </div>
    </div>
  )
}

export default PaymentModal