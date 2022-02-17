// get all work find products
const Product = require('../models/productModel')
const ErrorHander = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ApiFeatures = require('../utils/apifeatures')

// create a product
// try to create the new product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body)
  res.status(201).json({
    success: true,
    product,
  })
})

// get all products from the rest api
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8
  const productsCount = await Product.countDocuments()

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage)
  const products = await apiFeature.query

  // let filteredProductsCount = products.length

  // apiFeature.pagination(resultPerPage)

  // products = await apiFeature.query

  res.status(200).json({
    success: true,
    products,
    productsCount,
    // resultPerPage,
    // filteredProductsCount,
  })
})

// get all products details
exports.getProductsDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    return next(new ErrorHander('Product not found', 404))
  }

  res.status(200).json({
    success: true,
    product,
    productsCount,
  })
})

// update a product by id
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id)

  if (!product) {
    return next(new ErrorHander('Product not found', 404))
  }

  // find and update product with new id
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    product,
  })
})

// delete a product from the store by id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    return next(new ErrorHander('Product not found', 404))
  }

  await product.remove()

  res.status(200).json({
    success: true,
    message: 'Product deleted',
  })
})
