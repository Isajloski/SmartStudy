package mk.ukim.finki.smartstudy.service;

import mk.ukim.finki.smartstudy.model.auth.Role;
import mk.ukim.finki.smartstudy.model.enumerations.ERole;

public interface RoleService {
    Role insertInto(ERole eRole);
}
