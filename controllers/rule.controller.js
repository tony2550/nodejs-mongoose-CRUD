const db = require('../models');

const Rule = db.rules;

// rule 생성 , 저장
exports.create = (req, res) => {
  // request data 검증
  console.log(req.body);
  if (!req.body.title) {
    res.status(400).send({ message: 'Content should be writed' });
    return;
  }

  const rule = new Rule({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });

  rule
    .save(rule)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Rule 생성에 문제가 생겼습니다.',
      });
    });
};

// 검색 rules
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {};

  Rule.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Rule 검색에 문제가 생겼습니다.',
      });
    });
};

// rule 한건 찾기 id로
exports.findOne = (req, res) => {
  const id = req.params.id;

  Rule.findById(id).then((data) => {
    if (!data) res.status(404).send({ message: 'Not found Rule with id' + id });
    else
      res.send(data).catch((err) => {
        res.status(500).send({ message: 'error retrieving Rule with id' + id });
      });
  });
};

// 요청 id로 rule 1건 업데이트
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'data to update can not be empty!',
    });
  }

  const id = req.params.id;

  Rule.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `cannot update rule with ${id}. Maybe Rule was not found`,
        });
      } else res.send({ message: 'Rule was updated successfully' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'error updating Rule with id' + id,
      });
    });
};

//
exports.delete = (req, res) => {
  const id = req.params.id;

  Rule.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `cannot delete rule with id=${id}`,
        });
      } else {
        res.send({
          message: 'rule was deleted successfully',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete tule with' + id,
      });
    });
};

//
exports.deleteAll = (req, res) => {
  Rule.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount}  were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all tutorials.',
      });
    });
};

//
exports.findAllPublished = (req, res) => {
  Rule.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'some error occured while rules searching',
      });
    });
};
