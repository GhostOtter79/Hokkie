const Players = require('../models/players.js');

exports.getPlayer = (req, res, next) => {
  res.render('views/PlayerStatsView', {
    pageTitle: 'Add Player',
    path: '/views/add-product',
    editing: false
  });
};

exports.postAddPlayer = (req, res, next) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const position = req.body.position;
    const age = req.body.age;
    const goals = req.body.goals;
    req.user
      .createPlayer({
        name: name,
        surname: surname,
        position: position,
        age: age,
        goals: goals
      })
      .then(result => {
        // console.log(result);
        console.log('Created Player');
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*exports.getPlayer = (req, res, next) => {
    Players.findAll(products => {
      plyrs: 
    })
  }*/
  
  /*exports.getEditPlayer = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const prodId = req.params.productId;
    req.user
      .getProducts({ where: { id: prodId } })
      // Product.findById(prodId)
      .then(products => {
        const product = products[0];
        if (!product) {
          return res.redirect('/');
        }
        res.render('admin/edit-product', {
          pageTitle: 'Edit Product',
          path: '/admin/edit-product',
          editing: editMode,
          product: product
        });
      })
      .catch(err => console.log(err));
  };*/