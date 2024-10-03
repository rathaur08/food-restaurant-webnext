const RestaurantSignup = () => {
  return (
    <>
      <div className="w-25">
        <h4>Signup Components</h4>
        <form>
          <div class="mb-1">
            <label class="form-label">Enter Restaurant Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-1">
            <label class="form-label">Contact Number</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-1">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" />
          </div>
          <div class="mb-1">
            <label class="form-label">City</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-1">
            <label class="form-label">Full Address</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-1">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" />
          </div>
          <div class="mb-1">
            <label class="form-label">Confirm Password</label>
            <input type="password" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default RestaurantSignup;
