package mk.ukim.finki.smartstudy.service.Impl;

import mk.ukim.finki.smartstudy.model.auth.Role;
import mk.ukim.finki.smartstudy.model.enumerations.ERole;
import mk.ukim.finki.smartstudy.repository.RoleRepository;
import mk.ukim.finki.smartstudy.service.RoleService;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role insertInto(ERole eRole) {
        Role role = new Role(eRole);
        return this.roleRepository.save(role);
    }


}
