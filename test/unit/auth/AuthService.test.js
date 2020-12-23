const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthService = require('../../../src/domains/auth/AuthService');

jest.mock('bcrypt');
jest.mock('jsonwebtoken');

let service;
let repository;

const username = 'username';
const password = 'password';
const hashedPassword = 'hash';
const saltResult = 'salt';
const accessToken = 'accessToken';
const user = { id: 2, username, password: hashedPassword };

describe('AuthService', () => {
  beforeEach(() => {
    bcrypt.genSalt.mockResolvedValue(saltResult);
    bcrypt.hash.mockResolvedValue(hashedPassword);
    bcrypt.compare.mockResolvedValue(true);

    jwt.sign.mockReturnValue(accessToken);

    repository = {
      create: jest.fn().mockResolvedValue(user),
      getUserByUsername: jest.fn().mockResolvedValue(user)
    };

    service = new AuthService({ repository });
  });

  describe('signup', () => {
    it('Should signup a new customer', async () => {
      const data = { username, password };

      const result = await service.signup({ data });

      expect(bcrypt.genSalt).toHaveBeenCalledTimes(1);
      expect(bcrypt.genSalt).toHaveBeenCalledWith();

      expect(bcrypt.hash).toHaveBeenCalledTimes(1);
      expect(bcrypt.hash).toHaveBeenCalledWith(password, saltResult);

      expect(repository.create).toHaveBeenCalledTimes(1);
      expect(repository.create).toHaveBeenCalledWith({
        data: {
          username,
          password: hashedPassword
        }
      });

      expect(result).toEqual(user);
    });
  });

  describe('login', () => {
    it('Should login a customer with valid info', async () => {
      const result = await service.login({ username, password });

      expect(repository.getUserByUsername).toHaveBeenCalledTimes(1);
      expect(repository.getUserByUsername).toHaveBeenCalledWith({ username });

      expect(bcrypt.compare).toHaveBeenCalledTimes(1);
      expect(bcrypt.compare).toHaveBeenCalledWith(password, hashedPassword);

      expect(jwt.sign).toHaveBeenCalledTimes(1);
      expect(jwt.sign).toHaveBeenCalledWith(
        { id: user.id, username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '12h', audience: 'user' }
      );

      expect(result).toEqual({ accessToken });
    });
  });
});
