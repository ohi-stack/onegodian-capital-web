# Disclosure Requirements

Every capital offering must be tied to a versioned disclosure packet before it is made available to users.

## Minimum Disclosure Fields

- Offering name
- Instrument type
- Use of funds
- Principal amount rules
- Payment or repayment terms
- Maturity terms
- Investor eligibility
- Risk factors
- Cancellation/refund rules
- Transfer restrictions
- Company contact information
- Disclosure packet version
- Effective date

## Acceptance Record

Each acceptance should store:

- User ID
- Offering ID
- Disclosure packet version
- Acceptance timestamp
- IP address where lawful and appropriate
- User agent
- Acceptance hash

## Production Rule

No instrument should be issued unless the disclosure packet has been accepted and the acceptance record is linked to the instrument record.
