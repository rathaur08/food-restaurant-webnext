const RestaurantLogin = () => {
  return (
    <>
      <div className="w-25">
        <h3>Login Components</h3>
        <form>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default RestaurantLogin;
