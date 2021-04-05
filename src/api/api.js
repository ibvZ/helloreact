import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1cd48b75-8100-4aeb-93f8-bf0ee8ccbc71'
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize)  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  }
}

export const profileAPI = {
  getProfileInfo(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data)
  },

  getProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => response.data)
  },

  updateProfileStatus(status) {
    return instance.put(`profile/status/`, { status: status }).then(response => response.data);
  }
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then(response => response.data);
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login/`, { email, password, rememberMe }).then(response => response.data);
  },

  logout() {
    return instance.delete(`auth/login/`).then(response => response.data);
  }
}

export const securityAPI = {
  getCaptcha() {
    return instance.get(`/security/get-captcha-url/`).then(response => response.data);
  },
}