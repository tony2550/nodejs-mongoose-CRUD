module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
    },
    { timestamps: true }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Rule = mongoose.model('model', schema);
  return Rule;
};

// 여기까지 스키마 설정하면 그다음 CRUD 함수는 Mongoose 모델에서 제공한다.
