test:
	mocha --reporter spec --check-leaks test/

test-cov:
	istanbul cover `which _mocha` -- --reporter dot --check-leaks test/

test-travis:
	istanbul cover `which _mocha` --report lcovonly -- --reporter spec --check-leaks test/

.PHONY: test test-cov test-travis
