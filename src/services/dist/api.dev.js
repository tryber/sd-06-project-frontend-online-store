"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategories = getCategories;
exports.getProductsFromCategoryAndQuery = getProductsFromCategoryAndQuery;

function getCategories() {
  var response, categories;
  return regeneratorRuntime.async(function getCategories$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://api.mercadolibre.com/sites/MLB/categories'));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          categories = _context.sent;
          return _context.abrupt("return", categories);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getProductsFromCategoryAndQuery() {
  var catId,
      query,
      url,
      response,
      results,
      _args2 = arguments;
  return regeneratorRuntime.async(function getProductsFromCategoryAndQuery$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          catId = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';
          query = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : '';
          url = 'https://api.mercadolibre.com/sites/MLB/search?';
          _context2.next = 5;
          return regeneratorRuntime.awrap(fetch("".concat(url, "category=").concat(catId, "&q=").concat(query)));

        case 5:
          response = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          results = _context2.sent;
          return _context2.abrupt("return", results);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}