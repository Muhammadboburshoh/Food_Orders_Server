const router = require("express").Router()

const order = require("./model")

/*
  Create order
*/
router.post("/", async (req, res) => {

    const orderItem = await order.createOrderItem(req.body)
    if(orderItem) {
      res.status(201).send(orderItem)
    } else {
    res.status(401).end()
    }

})

router.post("/order", async(req, res )=>{

  const newOrder = await order.createOrder(req.body)

  if(newOrder) {
    res.status(201).send(newOrder)
  } else {
  res.status(401).end()
  }
})


/*
  Get orders
*/
router.get("/", async(req, res) => {

  const successfulOrders = await order.successfulOrders()

  if(successfulOrders) {
    res.status(201).send(successfulOrders)
  } else {
  res.status(401).end()
  }

})

router.get("/failed", async(req, res) => {

  const failedSuccessfulOrders = await order.failedSuccessfulOrders()

  if(failedSuccessfulOrders) {
    res.status(201).send(failedSuccessfulOrders)
  } else {
  res.status(401).end()
  }

})

router.get("/new/:id", async(req, res) => {

  const tableId = req.params.id

  const newOrders = await order.newOrders(tableId)

  console.log(newOrders);

  if(newOrders) {
    res.status(201).send(newOrders)
  } else if(newOrders == "undefined") {
    res.status(201).send(newOrders)
  } else {
    res.status(401).end()
  }
  

})

module.exports = router