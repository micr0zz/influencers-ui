

const mockAddFollowing = jest.fn();
const mockRemoveFollowing = jest.fn();


const mockData = {
  username: 'testuser',
  biography: 'This is a test biography',
  website: 'https://example.com',
  name: 'Test User',
  profilePicture: 'https://example.com/profile.jpg',
  isFollowed: false,
};

test('expect to pass', () => {
    expect(3).toBe(3);
  });