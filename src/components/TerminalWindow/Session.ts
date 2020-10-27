class Session {
  protected readonly _id = Date.now();

  get id() {
    return this._id;
  }
}

export default Session;
