const EventRepository = require('./event-repository');

class EventService {
    find(query) {
        return EventRepository.find(query);
    }

    findAll() {
        return EventRepository.findAll();
    }

    findOne(query) {
        return EventRepository.findOne(query);
    }

    findById(id) {
        return EventRepository.findById(id);
    }

    save(event) {
        return EventRepository.save(event);
    }
}

module.exports = new EventService();