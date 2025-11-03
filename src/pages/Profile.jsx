import React from 'react';

function Profile() {
  return (
    <div className="container">
      <h1>Profile</h1>

      <div className="grid grid-cols-2">
        <div className="card">
          <div className="text-center mb-3">
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#007bff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              color: 'white',
              fontSize: '32px'
            }}>
              👤
            </div>
            <h2 className="mt-2">John Doe</h2>
            <p className="text-secondary">john.doe@example.com</p>
          </div>

          <button className="btn btn-outline" style={{ width: '100%' }}>
            Edit Profile
          </button>

          <div className="mt-3">
            <h3>Quick Stats</h3>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span>Age</span>
                <span>28 years</span>
              </div>
              <div className="flex justify-between">
                <span>Height</span>
                <span>5'10"</span>
              </div>
              <div className="flex justify-between">
                <span>Weight</span>
                <span>180 lbs</span>
              </div>
              <div className="flex justify-between">
                <span>Activity Level</span>
                <span>Moderate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Personal Information</h2>
          <form>
            <div className="grid grid-cols-2 gap-2">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" defaultValue="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" defaultValue="john.doe@example.com" />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input type="number" className="form-control" defaultValue="28" />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select className="form-control">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Height</label>
                <input type="text" className="form-control" defaultValue="5'10"" />
              </div>
              <div className="form-group">
                <label>Weight (lbs)</label>
                <input type="number" className="form-control" defaultValue="180" />
              </div>
            </div>

            <h3 className="mt-3">Fitness Preferences</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="form-group">
                <label>Activity Level</label>
                <select className="form-control">
                  <option>Sedentary</option>
                  <option selected>Moderate</option>
                  <option>Very Active</option>
                </select>
              </div>
              <div className="form-group">
                <label>Primary Goal</label>
                <select className="form-control">
                  <option selected>Muscle Gain</option>
                  <option>Fat Loss</option>
                  <option>Strength</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;