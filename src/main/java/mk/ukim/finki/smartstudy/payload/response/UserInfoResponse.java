package mk.ukim.finki.smartstudy.payload.response;

import java.util.Date;
import java.util.List;

public class UserInfoResponse {
	private Long id;
	private String username;
	private String email;

	private String first_name;
	private String last_name;
	private String city;
	private String country;
	private Date birthday;
	private String description;
	private List<String> roles;

	public UserInfoResponse(Long id, String username, String email, String first_name, String last_name ,String city, String country, Date birthday, String description, List<String> roles) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.first_name = first_name;
		this.last_name = last_name;
		this.city = city;
		this.country = country;
		this.birthday = birthday;
		this.description = description;
		this.roles = roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<String> getRoles() {
		return roles;
	}
}
